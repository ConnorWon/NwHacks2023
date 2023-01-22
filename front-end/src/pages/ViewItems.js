import { useEffect } from "react";

const ViewingItem = (props) => {
  useEffect(() => {}, [props.item]);

  const type = props.item.clothing_type;

  return (
    <>
      <div id="singleItemViewDiv">
        {props.item.name}
        <div
          id="setOutfitDiv"
          onClick={() => {
            console.log(type);
            console.log(props.wearing);
            if (type == "top") {
              props.setWearingItem({ ...props.wearing, top: props.item });
            } else if (type == "bottom") {
              props.setWearingItem({ ...props.wearing, bottom: props.item });
            } else if (type == "shoes") {
              props.setWearingItem({ ...props.wearing, shoes: props.item });
            }
            console.log(props.wearing);
          }}
        >
          wear {props.item.clothing_type}
        </div>
      </div>
    </>
  );
};

export default ViewingItem;
