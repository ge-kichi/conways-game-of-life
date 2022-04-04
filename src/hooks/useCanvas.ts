import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { GetterTypes, key, MutationTypes } from "@/store";
import { create, CGOL } from "@/modules/CGOL";

const cellRatio = 16;
const cellSizeRatio = 0.95;
const cellSize = cellRatio * cellSizeRatio;
const cellStyle = "#00933B";

const { Pattern } = GetterTypes;
const { UpdateGen } = MutationTypes;

let context: CanvasRenderingContext2D;
let canvasWidth: number;
let canvasHeight: number;
let spaceSize: number;
let maxGen: number;
let cgol: CGOL;
let timeoutID: number;
let intervalID: number;

const useCanvas = () => {
  const { commit, getters } = useStore(key);
  const sketchIn = ref();

  onMounted(() => {
    const node = sketchIn.value;
    context = node.getContext("2d");

    const clear = () => {
      clearInterval(intervalID);
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      commit(UpdateGen, 0);
    };

    const init = () => {
      node.removeEventListener("click", start);
      clear();
      const clientWidth = node.clientWidth;
      const clientHeight = node.clientHeight;
      spaceSize = Math.floor(clientWidth / cellRatio);
      maxGen = Math.floor(clientHeight / cellRatio) - 1;
      canvasWidth = spaceSize * cellRatio;
      canvasHeight = maxGen * cellRatio;
      node.setAttribute("width", canvasWidth.toString());
      node.setAttribute("height", canvasHeight.toString());
      node.addEventListener("click", start);
    };

    const visualizer = (state: Int8Array[]) => {
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

    const start = () => {
      clear();
      cgol = create(spaceSize, maxGen, getters[Pattern]);
      context.fillStyle = cellStyle;
      visualizer(cgol.state);
      intervalID = setInterval(() => {
        cgol = cgol.generate();
        visualizer(cgol.state);
        commit(UpdateGen, cgol.gen);
      }, 1000 / 30);
    };

    init();
    window.addEventListener("resize", () => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(init, 1000);
    });
  });
  return sketchIn;
};

export default useCanvas;
