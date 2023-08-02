import interact from "interactjs";
import { transformBoxes } from "../../actions/boxActions";
import store from "../../stores/MainStore";


export default function InteractDraggable (boxRef) {
  const boxElement = boxRef.current;

  const interactInstance = interact(boxElement).draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent', // keep the element within the area of it's parent
        endOnly: true
      })
    ],
    autoScroll: true,

    listeners: {
      start (event) {
        store.undoHistory.startGroup(() => {})
      },
      move (event) {
        transformBoxes(event.dx, event.dy);
      },
      end (event) {
        store.undoHistory.stopGroup(() => {})
      }
    }
  });

  return () => interactInstance.unset();
};