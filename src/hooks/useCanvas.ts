import { computed, ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { ActionTypes, GetterTypes, key, PlayState } from "@/store";
import { create, CGOL } from "@/modules/CGOL";

const cellSize = 16;
const cellSide = cellSize * 0.9;
const waitTime = 200;

const { Pattern, PlayState } = GetterTypes;
const { Initialize, Ready, TogglePlayPause, UpdateGen } = ActionTypes;

let context: CanvasRenderingContext2D;
let canvasWidth: number;
let canvasHeight: number;
let cellCountWidth: number;
let cellCountHeight: number;
let cgol: CGOL;
let timeoutID: number;
let requestID: number;

const visualizer = (state: Int8Array[]) => {
  context.fillStyle = "#00933B";
  for (let i = 0; i < state.length; i++) {
    const column = state[i];
    const y = i * cellSize;
    for (let j = 0; j < column.length; j++) {
      const x = j * cellSize;
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

  const render = () => {
    cgol = cgol.generate();
    visualizer(cgol.state);
    dispatch(UpdateGen, cgol.gen);
    requestID = requestAnimationFrame(render);
  };

  onMounted(() => {
    watch(playState, (newValue) => {
      switch (newValue) {
        case "initialized": {
          node.removeEventListener("click", togglePlayPause);
          cancelAnimationFrame(requestID);
          context.clearRect(0, 0, canvasWidth, canvasHeight);
          cgol = create(cellCountWidth, cellCountHeight, getters[Pattern]);
          visualizer(cgol.state);
          dispatch(UpdateGen, cgol.gen);
          node.addEventListener("click", togglePlayPause);
          dispatch(Ready);
          break;
        }
        case "paused": {
          cancelAnimationFrame(requestID);
          break;
        }
        case "started": {
          render();
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
