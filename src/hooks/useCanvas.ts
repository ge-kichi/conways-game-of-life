import { computed, ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { ActionTypes, GetterTypes, key, PlayState } from "@/store";
import { CellArray, CGOL, create } from "@/modules/CGOL";

const cellSize = 16;
const cellSide = Math.floor(cellSize * 0.9);
const fps = 12;

const { Pattern, PlayState } = GetterTypes;
const { Initialize, Ready, TogglePlayPause, UpdateGen } = ActionTypes;

let context: CanvasRenderingContext2D;
let canvasWidth: number;
let canvasHeight: number;
let cellCountWidth: number;
let cellCountHeight: number;
let cgol: CGOL;
let intervalID: number;

const cellPos = (i: number) => i * cellSize + (cellSize - cellSide) / 2;

const visualizer = (state: CellArray[]) => {
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
  const sketchInContainer = ref();
  const playState = computed<PlayState>(() => getters[PlayState]);

  const togglePlayPause = () => dispatch(TogglePlayPause);

  const init = (canvasNode: HTMLCanvasElement, containerNode: HTMLElement) => {
    const { clientWidth, clientHeight } = containerNode;
    cellCountWidth = Math.floor(clientWidth / cellSize);
    cellCountHeight = Math.floor(clientHeight / cellSize);
    canvasWidth = cellCountWidth * cellSize;
    canvasHeight = cellCountHeight * cellSize;
    canvasNode.width = canvasWidth;
    canvasNode.height = canvasHeight;
    dispatch(Initialize);
  };

  onMounted(() => {
    const canvasNode = sketchIn.value;
    const containerNode = sketchInContainer.value;

    watch(playState, (newValue) => {
      switch (newValue) {
        case "initialized": {
          canvasNode.removeEventListener("click", togglePlayPause);
          clearInterval(intervalID);
          context.clearRect(0, 0, canvasWidth, canvasHeight);
          cgol = create(cellCountWidth, cellCountHeight, getters[Pattern]);
          visualizer(cgol.state);
          dispatch(UpdateGen, cgol.gen);
          canvasNode.addEventListener("click", togglePlayPause);
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
          init(canvasNode, containerNode);
          break;
        }
      }
    });

    context = canvasNode.getContext("2d");
    window.addEventListener("resize", () => init(canvasNode, containerNode));
    init(canvasNode, containerNode);
  });

  return { sketchIn: sketchIn, sketchIn__container: sketchInContainer };
};

export default useCanvas;
