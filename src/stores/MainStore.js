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
      removeSelectedBox() {
        self.boxes = self.boxes.filter(box => !box.selected);
      },
      transformBox(id, left, top) {
        const boxToTransform = self.boxes.find(box => box.id === id);
        if (boxToTransform) {
          boxToTransform.transform(left, top);
        }
      },
      changeColor(color) {
        const selectedBox = self.boxes.find(box => box.selected);
        if (selectedBox) {
          selectedBox.setColor(color);
        }
      }
  }))
  .views(self => ({}));

const store = MainStore.create();

export default store;
