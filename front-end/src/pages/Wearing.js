import "../styles/LoginStyle.css";
import { useEffect } from 'react'

const Wearing = (props) => {

  useEffect(() => {

  }, [props.item])

  return (
    <div>
      {props.item.top ? (
        <h2 className="top">{"Top:" + props.item.top}</h2>
      ) : (
        <h2 className="top">Top: N/A</h2>
      )}
      {props.item.bottom ? (
        <h2 className="bottom">{"Bottom:" + props.item.bottom}</h2>
      ) : (
        <h2 className="bottom">Bottom: N/A</h2>
      )}
      {props.item.shoes ? (
        <h2 className="shoes">{"Shoes:" + props.item.shoes}</h2>
      ) : (
        <h2 className="shoes">Shoes: N/A</h2>
      )}
    </div>
  );
};

export default Wearing;
