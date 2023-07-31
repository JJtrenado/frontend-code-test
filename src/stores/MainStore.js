import { types } from "mobx-state-tree";
import BoxModel from "./models/Box";
import { remove } from "mobx";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel)
  })
  .actions(self => ({
      addBox(box) {
        self.boxes.push(box);
      },
      removeLastBox() {
        self.boxes.pop();
      },
      selectBox(id) {
        self.boxes.forEach(Box => Box.setSelected(false));
        const boxToSelect = self.boxes.find(box => box.id === id);
        if (boxToSelect) {
          boxToSelect.setSelected(true);
        }
      },
      removeSelectedBox() {
        const selectedBoxIndex = self.boxes.findIndex(box => box.selected === true);
        console.log(selectedBoxIndex);
        if (selectedBoxIndex !== -1) {
          self.boxes.splice(selectedBoxIndex, 1);
        }
      }
  }))
  .views(self => ({}));

const store = MainStore.create();

export default store;
