import { types } from "mobx-state-tree";
import BoxModel from "./models/Box";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel),
    selectedBoxesCounter: 0
  })
  .actions(self => ({
      addBox(box) {
        self.boxes.push(box);
      },

      removeLastBox() {
        self.boxes.pop();
      },

      removeSelectedBoxes() {
        self.boxes = self.boxes.filter(box => !box.selected);
      },

      selectOneBox(id) {
        self.boxes.forEach(Box => Box.setSelected(false));
        const boxToSelect = self.boxes.find(box => box.id === id);
        if (boxToSelect) {
          boxToSelect.setSelected(true);
        }
        self.selectedBoxesCounter = 1;
      },
      
      selectMultipleBoxes(id) {
        const boxToSelect = self.boxes.find(box => box.id === id);
        if (boxToSelect) {
          boxToSelect.setSelected(true);
        }
        self.selectedBoxesCounter = self.boxes.filter(box => box.selected).length;
      },
      
      transformBox(id, left, top) {
        const boxToTransform = self.boxes.find(box => box.id === id);
        if (boxToTransform) {
          boxToTransform.transform(left, top);
        }
      },
      
      changeColor(color) {
        const selectedBoxes = self.boxes.filter(box => box.selected);
        if (selectedBoxes) {
          selectedBoxes.forEach(box => box.setColor(color));
        }
      }
  }))
  .views(self => ({}));

const store = MainStore.create();

export default store;
