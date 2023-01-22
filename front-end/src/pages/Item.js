import { useEffect } from "react";

const Item = (props) => {
  return (
    <>
      <div
        id="itemDiv"
        onClick={() => {
          props.setViewingItem(props.item);
        }}
      >
        <p>
          {props.item.name +
            " " +
            props.item.color +
            "      " +
            "Type: " +
            props.item.clothing_type}
        </p>
      </div>
    </>
  );
};

export default Item;
