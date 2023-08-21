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