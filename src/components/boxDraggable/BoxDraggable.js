import React, { useRef, useEffect } from "react";
import { observer } from "mobx-react";
import { selectBox } from "../../actions/BoxActions";
import InteractDraggable from "./Interact";
import { removeSelectedBoxesButtonAvailability } from "../Toolbar/ToolbarAvailability";

function BoxDraggable(props) {
  const boxRef = useRef(null);

  useEffect(() => {
    InteractDraggable(boxRef);
  }, [props]);

  function handleSelect (event) {
    selectBox(props.id, event);
    removeSelectedBoxesButtonAvailability();
  };


  return (
    <div
      //passing event to more then one box with ctrl key
      onMouseDown={(event) => handleSelect(event)}
      id={props.id}
      ref={boxRef}
      className="box"
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
        border: props.selected ? "2px dashed white" : "none",
        transform: `translate(${props.left}px, ${props.top}px)`,
        boxSizing: "border-box",
      }}
    >
      {props.children}
    </div>
  );
}

export default observer(BoxDraggable);
