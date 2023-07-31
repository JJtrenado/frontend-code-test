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
  }))
  .views(self => ({}));

const store = MainStore.create();

export default store;
