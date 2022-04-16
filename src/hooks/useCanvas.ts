import { computed, ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { ActionTypes, GetterTypes, key, PlayState } from "@/store";
import { create, CGOL } from "@/modules/CGOL";

const cellSize = 16;
const cellSide = Math.floor(cellSize * 0.9);
const waitTime = 500;
const fps = 12;

const { Pattern, PlayState } = GetterTypes;
const { Initialize, Ready, TogglePlayPause, UpdateGen } = ActionTypes;

let context: CanvasRenderingContext2D;
let canvasWidth: number;
let canvasHeight: number;
let cellCountWidth: number;
let cellCountHeight: number;
let cgol: CGOL;
let timeoutID: number;
let intervalID: number;

const cellPos = (i: number) => i * cellSize + (cellSize - cellSide) / 2;

const visualizer = (state: Int8Array[]) => {
  context.fillStyle = "#00933B";
  for (let i = 0; i < state.length; i++) {
    const column = state[i];
    const y = cellPos(i);
    for (let j = 0; j < column.length; j++) {
      const x = cellPos(j);
      if (column[j] === 1) {
        context.fillRect(x, y, cellSide, cellSide);
      } else {
        context.clearRect(x, y, cellSide, cellSide);
      }
    }
  }
};

const useCanvas = () => {
  const { dispatch, getters } = useStore(key);
  const sketchIn = ref();
  const playState = computed<PlayState>(() => getters[PlayState]);

  const togglePlayPause = () => dispatch(TogglePlayPause);

  const init = (node: HTMLCanvasElement) => {
    const { clientWidth, clientHeight } = node;
    cellCountWidth = Math.floor(clientWidth / cellSize);
    cellCountHeight = Math.floor(clientHeight / cellSize);
    canvasWidth = cellCountWidth * cellSize;
    canvasHeight = cellCountHeight * cellSize;
    node.width = canvasWidth;
    node.height = canvasHeight;
    dispatch(Initialize);
  };

  const debounceInit = (node: HTMLCanvasElement) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => init(node), waitTime);
  };

  onMounted(() => {
    watch(playState, (newValue) => {
      switch (newValue) {
        case "initialized": {
          node.removeEventListener("click", togglePlayPause);
          clearInterval(intervalID);
          context.clearRect(0, 0, canvasWidth, canvasHeight);
          cgol = create(cellCountWidth, cellCountHeight, getters[Pattern]);
          visualizer(cgol.state);
          dispatch(UpdateGen, cgol.gen);
          node.addEventListener("click", togglePlayPause);
          dispatch(Ready);
          break;
        }
        case "paused": {
          clearInterval(intervalID);
          break;
        }
        case "started": {
          intervalID = setInterval(() => {
            cgol = cgol.generate();
            visualizer(cgol.state);
            dispatch(UpdateGen, cgol.gen);
          }, 1000 / fps);
          break;
        }
        case "stopped": {
          init(node);
          break;
        }
      }
    });

    const node = sketchIn.value;
    context = node.getContext("2d");
    window.addEventListener("resize", () => debounceInit(node));
    debounceInit(node);
  });

  return { sketchIn };
};

export default useCanvas;
