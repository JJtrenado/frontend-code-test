import { types, onSnapshot, applySnapshot } from "mobx-state-tree";
import BoxModel from "./models/Box";
import { UndoManager } from "mst-middlewares"


const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel),
    selectedBoxesCounter: 0,
    undoHistory: types.optional (UndoManager, {}),
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
      
      transformBoxes(left, top) {
        const selectedBoxes = self.boxes.filter(box => box.selected);
        if (selectedBoxes) {
          selectedBoxes.forEach(box => box.transform(left, top));
        }
      },
      
      changeColor(color) {
        const selectedBoxes = self.boxes.filter(box => box.selected);
        if (selectedBoxes) {
          selectedBoxes.forEach(box => box.setColor(color));
        }
      },

      saveToLocalStorage() {
        const snapshot = self.toJSON();
        localStorage.setItem("mainStoreSnapshot", JSON.stringify(snapshot));
      },
  
      loadFromLocalStorage() {
        const snapshotJson = localStorage.getItem("mainStoreSnapshot");
        if (snapshotJson) {
          const snapshot = JSON.parse(snapshotJson);
          applySnapshot(self, snapshot);
        }
      }
  }))
  .views(self => ({}));

  const store = MainStore.create();

  store.loadFromLocalStorage();
  
  onSnapshot(store, () => {
    store.saveToLocalStorage();
  });

export default store;
