import store from "../../stores/MainStore";

export const removeLastBoxButtonAvailability = () => {
  const removeLastBoxButton = document.getElementById('removeLastBoxButton');
  if (store.boxes.length <= 0) {
    removeLastBoxButton.disabled = true;
  }
  else {
    removeLastBoxButton.disabled = false;
  }
}

export const removeSelectedBoxesButtonAvailability = () => {
  const removeSelectedBoxesButton = document.getElementById('removeSelectedBoxesButton');
  if (store.selectedBoxesCounter <= 0) {
    removeSelectedBoxesButton.disabled = true;
  }
  else {
    removeSelectedBoxesButton.disabled = false;
  }
}