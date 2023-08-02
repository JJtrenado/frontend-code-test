import React, { useRef, useEffect } from "react";
import { observer } from "mobx-react";
import { selectBox } from "../../actions/boxActions";
import InteractDraggable from "./Interact";

function BoxDraggable(props) {
  const boxRef = useRef(null);

  useEffect(() => {
    InteractDraggable(boxRef, props);
  }, [props]);

  return (
    <div
      //passing event to more then one box with ctrl key
      onMouseDown={(event) => selectBox(props.id, event)}
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
