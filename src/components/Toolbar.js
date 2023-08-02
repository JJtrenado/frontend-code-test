import React from "react";
import {addBox, removeLastBox, removeSelectedBox, changeColor} from "../actions/boxActions";


function Toolbar() {
  return (
    <div className="toolbar">
      <button onClick={addBox} >Add Box</button>
      <button onClick={removeLastBox} >Remove last Box</button>
      <button onClick={removeSelectedBox} >Remove selected Box</button>
      <input type="color" onChange={changeColor}/>
      <span id={'selectMessage'} >No boxes selected</span>
    </div>
  );
}

export default Toolbar;
