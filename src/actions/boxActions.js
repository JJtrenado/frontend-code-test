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

export const removeBox = () => {
  store.removeBox();
}

export const selectBox = (id) => {
  store.selectBox(id);
}