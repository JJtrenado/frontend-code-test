import uuid from "uuid/v4";
import BoxModel from "../stores/models/Box";
import getRandomColor from "../utils/getRandomColor";
import store from "../stores/MainStore";

export const addBox = () => {
  const box = BoxModel.create({
    id: uuid(),
    color: getRandomColor(),
    left: 0,
    top: 0
  });

  store.addBox(box);
}

export const removeLastBox = () => {
  store.removeLastBox();
  deselectAllBoxes();
}

export const removeSelectedBoxes = () => {
  store.removeSelectedBoxes();
  deselectAllBoxes();
}

export const selectBox = (id, event) => {
  const selectMessage = document.getElementById('selectMessage');
  if (selectMessage){
    if (!event.ctrlKey) {
      store.selectOneBox(id, event);
      const index = store.boxes.findIndex(box => box.id === id);
      selectMessage.textContent = 'Box nº ' + index + ' selected. Use Ctrl for multiple selection';
    }
    
    else {
      store.selectMultipleBoxes(id);
      selectMessage.textContent = store.selectedBoxesCounter + ' boxes selected';
    } 
  }
}

export const deselectAllBoxes = () => {
  store.deselectAllBoxes();
  const selectMessage = document.getElementById('selectMessage');
  if (selectMessage){
    selectMessage.textContent = 'No boxes selected';
  }
}

export const transformBoxes = (left, top) => {
  store.transformBoxes(left, top);
}

export const changeColor = (event) => {
  const color = event.target.value;
  store.changeColor(color);
}
