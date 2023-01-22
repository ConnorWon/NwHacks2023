const Item = (props) => {
  return (
    <>
      <div id="itemDiv">
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
