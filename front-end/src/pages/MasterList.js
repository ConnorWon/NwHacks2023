import Item from "./Item";
import { useEffect } from "react";

const MasterList = (props) => {
  // useEffect(() => {}, props.allItems);

  return (
    <>
      <div>
        {props.allItems.data?.map((item) => {
          return (
            <>
              <Item item={item} setViewingItem={props.setViewingItem} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default MasterList;
