import { types } from "mobx-state-tree";

const BoxModel = types
  .model("Box", {
    id: types.identifier,
    width: 200,
    height: 100,
    color: "#FFF000",
    left: 200,
    top: 100,
    selected: false,
  })
  .views(self => ({}))
  .actions(self => ({
    setSelected(selected) {
      self.selected = selected;
    },
    transform(left, top) {
      self.left = left;
      self.top = top;
    },
    setColor(color) {
      self.color = color;
    }
  }));

export default BoxModel;
