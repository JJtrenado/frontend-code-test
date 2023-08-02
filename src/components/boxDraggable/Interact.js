import interact from "interactjs";
import { transformBox } from "../../actions/boxActions";

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
        left = (parseFloat(boxElement.getAttribute("data-x")) || left) + event.dx;
        top = (parseFloat(boxElement.getAttribute("data-y")) || top) + event.dy;
        boxElement.setAttribute("data-x", left);
        boxElement.setAttribute("data-y", top);
        boxElement.style.transform = `translate(${left}px, ${top}px)`;
      },
      end (event) {          
        transformBox(id, left, top);
      }
    }
  });

  return () => interactInstance.unset();
};