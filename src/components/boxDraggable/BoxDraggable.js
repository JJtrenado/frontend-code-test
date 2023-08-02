import React, { useRef, useEffect } from "react";
import { observer } from "mobx-react";
import { selectBox } from "../../actions/boxActions";
import InteractDraggable from "./Interact";

function BoxDraggable(props) {
  const boxRef = useRef(null);

  useEffect(() => {
    InteractDraggable(boxRef, props.id, props.left, props.top);
  }, [props]);

  return (
    <div
      onClick={() => selectBox(props.id)}
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
