import React from "react";
import {addBox, removeLastBox, removeSelectedBoxes, changeColor} from "../actions/BoxActions";
import {Undo, Redo} from "../actions/HistoryActions";


function Toolbar() {
  return (
    <div className="toolbar">
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeLastBox}>Remove last Box</button>
      <button onClick={removeSelectedBoxes}>Remove selected Box</button>
      <button onClick={Undo}>Undo</button>
      <button onClick={Redo}>Redo</button>
      <input type="color" onChange={changeColor}/>
      <span id={'selectMessage'} >No boxes selected</span>
    </div>
  );
}

export default Toolbar;
