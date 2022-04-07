import { computed, ref, onMounted, watchEffect } from "vue";
import { useStore } from "vuex";
import { ActionTypes, GetterTypes, key, PlayState } from "@/store";
import { create, CGOL } from "@/modules/CGOL";

const cellRatio = 16;
const cellSizeRatio = 0.95;
const cellSize = cellRatio * cellSizeRatio;
const cellStyle = "#00933B";

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

const useCanvas = () => {
  const { dispatch, getters } = useStore(key);
  const sketchIn = ref();
  const playState = computed<PlayState>(() => getters[PlayState]);

  const clear = () => {
    clearInterval(intervalID);
    context.clearRect(0, 0, canvasWidth, canvasHeight);
  };

  const init = (node: HTMLCanvasElement) => {
    clear();
    const clientWidth = node.clientWidth;
    const clientHeight = node.clientHeight;
    cellCountWidth = Math.floor(clientWidth / cellRatio);
    cellCountHeight = Math.floor(clientHeight / cellRatio) - 1;
    canvasWidth = cellCountWidth * cellRatio;
    canvasHeight = cellCountHeight * cellRatio;
    node.setAttribute("width", canvasWidth.toString());
    node.setAttribute("height", canvasHeight.toString());
    dispatch(Stop);
  };

  const visualizer = (state: Int8Array[]) => {
    for (let i = 0; i < state.length; i++) {
      const column = state[i];
      const y = i * cellRatio;
      for (let j = 0; j < column.length; j++) {
        const x = j * cellRatio;
        if (column[j] === 1) {
          context.fillStyle = cellStyle;
          context.fillRect(x, y, cellSize, cellSize);
        } else {
          context.clearRect(x, y, cellSize, cellSize);
        }
      }
    }
  };

  onMounted(() => {
    const node = sketchIn.value;
    context = node.getContext("2d");

    window.addEventListener("resize", () => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => init(node), 1000);
    });

    node.addEventListener("click", () => dispatch(TogglePlayPause));
    init(node);

    watchEffect(() => {
      switch (playState.value) {
        case "started": {
          intervalID = setInterval(() => {
            cgol = cgol.generate();
            visualizer(cgol.state);
            dispatch(UpdateGen, cgol.gen);
          }, 1000 / 30);
          break;
        }
        case "paused": {
          clearInterval(intervalID);
          break;
        }
        case "stopped": {
          clear();
          cgol = create(cellCountWidth, cellCountHeight, getters[Pattern]);
          visualizer(cgol.state);
          dispatch(UpdateGen, cgol.gen);
          break;
        }
      }
    });
  });

  return { sketchIn };
};

export default useCanvas;
