import "../styles/LoginStyle.css";
import { useEffect } from "react";

const Wearing = (props) => {
  useEffect(() => {}, [props.item]);

  return (
    <div id="wearingDiv">
      {props.item.top ? (
        <h2 className="top">{"Top: " + props.item.top.name}</h2>
      ) : (
        <h2 className="top">Top: N/A</h2>
      )}
      {props.item.bottom ? (
        <h2 className="bottom">{"Bottom: " + props.item.bottom.name}</h2>
      ) : (
        <h2 className="bottom">Bottom: N/A</h2>
      )}
      {props.item.shoes ? (
        <h2 className="shoes">{"Shoes: " + props.item.shoes.name}</h2>
      ) : (
        <h2 className="shoes">Shoes: N/A</h2>
      )}
    </div>
  );
};

export default Wearing;
