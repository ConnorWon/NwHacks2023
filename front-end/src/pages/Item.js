import { useEffect } from 'react'

const Item = (props) => {

  // useEffect(() => {
  //   props.setViewingItem()
  // }, [])


  return (
    <>
      <div id="itemDiv" onClick={() => {
        props.setViewingItem(props.item)
      }}>
        <p>
          {props.item.name +
            " " +
            props.item.color +
            "      " +
            "type: " +
            props.item.clothing_type}
        </p>
      </div>
    </>
  );
};

export default Item;
