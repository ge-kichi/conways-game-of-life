import { computed, ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { ActionTypes, GetterTypes, key, PlayState } from "@/store";
import { create, CGOL } from "@/modules/CGOL";

const cellRatio = 16;
const cellSizeRatio = 0.9;
const cellSize = cellRatio * cellSizeRatio;
const cellStyle = "#00933B";
const fps = 1000 / 30;
const waitTime = 1000;

const { Pattern, PlayState } = GetterTypes;
const { Stop, TogglePlayPause, UpdateGen } = ActionTypes;

let context: CanvasRenderingContext2D;
let canvasWidth: number;
let canvasHeight: number;
let cellCountWidth: number;
let cellCountHeight: number;
let cgol: CGOL;
let timeoutID: number;
let intervalID: number;

const clear = () => {
  clearInterval(intervalID);
  context.clearRect(0, 0, canvasWidth, canvasHeight);
};

const visualizer = (state: Int8Array[]) => {
  context.fillStyle = cellStyle;
  for (let i = 0; i < state.length; i++) {
    const column = state[i];
    const y = i * cellRatio;
    for (let j = 0; j < column.length; j++) {
      const x = j * cellRatio;
      if (column[j] === 1) {
        context.fillRect(x, y, cellSize, cellSize);
      } else {
        context.clearRect(x, y, cellSize, cellSize);
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
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      cellCountWidth = Math.floor(node.clientWidth / cellRatio);
      cellCountHeight = Math.floor(node.clientHeight / cellRatio) - 1;
      canvasWidth = cellCountWidth * cellRatio;
      canvasHeight = cellCountHeight * cellRatio;
      node.width = canvasWidth;
      node.height = canvasHeight;
      dispatch(Stop);
    }, waitTime);
  };

  onMounted(() => {
    watch(playState, (newValue) => {
      switch (newValue) {
        case "started": {
          // requestAnimationFrame
          intervalID = setInterval(() => {
            cgol = cgol.generate();
            visualizer(cgol.state);
            dispatch(UpdateGen, cgol.gen);
          }, fps);
          break;
        }
        case "paused": {
          clearInterval(intervalID);
          break;
        }
        case "stopped": {
          node.removeEventListener("click", togglePlayPause);
          clear();
          cgol = create(cellCountWidth, cellCountHeight, getters[Pattern]);
          visualizer(cgol.state);
          dispatch(UpdateGen, cgol.gen);
          node.addEventListener("click", togglePlayPause);
          break;
        }
      }
    });

    const node = sketchIn.value;
    context = node.getContext("2d");
    window.addEventListener("resize", () => init(node));
    init(node);
  });

  return { sketchIn };
};

export default useCanvas;
