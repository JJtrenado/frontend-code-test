import React from "react";

import { observer } from "mobx-react";
import Box from "../components/Box";
import { selectBox } from "../actions/boxActions";

function Canvas({ store }) {

  return (
    <div className="canva">
      {store.boxes.map((box, index) => {
        const topAdjustment = index >= 6 ? Math.floor(index / 6) * 100 : 0;
        const leftAdjustment = (index % 6) * 200;

        return (
          <div onClick={() => selectBox(box.id)}>
            <Box
              id={box.id}
              key={index}
              color={box.color}
              left={leftAdjustment}
              top={box.top + topAdjustment}
              width={box.width}
              height={box.height}
              box={box}
              selected={box.selected}
            />
          </div>
        );
      })}
    </div>
  );
}

export default observer(Canvas);
