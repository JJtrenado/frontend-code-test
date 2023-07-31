import { types } from "mobx-state-tree";
import BoxModel from "./models/Box";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel)
  })
  .actions(self => ({
      addBox(box) {
        self.boxes.push(box);
      },
      removeBox(id) {
        self.boxes.pop();
      },
      selectBox(id) {
        self.boxes.forEach(Box => Box.setSelected(false));
        const boxToSelect = self.boxes.find(box => box.id === id);
        if (boxToSelect) {
          boxToSelect.setSelected(true);
        }
      }
  }))
  .views(self => ({}));

const store = MainStore.create();

export default store;
