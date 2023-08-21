import React from "react";

import store from "../stores/MainStore";
import Canvas from "./Canvas";
import Toolbar from "./Toolbar/Toolbar";
import { observer } from "mobx-react";

function App() {
  // Clearing the history on refresh is necessary to prevent errors with the undo function after a refresh
  store.undoHistory.clear();
  
  return (
    <div className="app">
      <Toolbar />
      <Canvas store={store} />
    </div>
  );
}

export default observer(App);
