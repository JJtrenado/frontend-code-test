import interact from "interactjs";
import { transformBoxes } from "../../actions/boxActions";

export default function InteractDraggable (boxRef, id, left, top) {
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
      move (event) {
        transformBoxes(event.dx, event.dy);
      }
    }
  });

  return () => interactInstance.unset();
};