import Item from "./Item"


const MasterList = (props) => {
    return (
        <>
          <div>
              {/* {props.allItems.map((item) => {
                return (
                  <>
                    <Item item={item} setViewingItem={props.setViewingItem} />
                  </>
                )
              })} */}

              {
                console.log(props.allItems)
              }
          </div>
        </>
    )
}

export default MasterList