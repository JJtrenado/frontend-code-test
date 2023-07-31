import React from "react";
import {addBox} from "../actions/boxActions";


function Toolbar() {
  return (
    <div className="toolbar">
      <button onClick={addBox} >Add Box</button>
      <button>Remove Box</button>
      <input type="color" />
      <span>No boxes selected</span>
    </div>
  );
}

export default Toolbar;
