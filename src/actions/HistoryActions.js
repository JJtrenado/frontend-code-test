import store from "../stores/MainStore";

export const Undo = () => {
  if (store.undoHistory.canUndo) {
    store.undoHistory.undo();
  }
}

export const Redo = () => {
  if (store.undoHistory.canRedo) {
    store.undoHistory.redo();
  }
}