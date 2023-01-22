import { useEffect } from 'react'

const ViewingItem = (props) => {

    useEffect(() => {

    }, [props.item])

    const type = props.item.clothing_type

    return (
        <>
            <div id="singleItemViewDiv">
                {props.item.name}
                <div id="setOutfitDiv" onClick={() => {
                    console.log(type)
                    props.setWearingItem({...props.wearingItem, type:props.item})
                    console.log(props.wearingItem)
                }} >
                    wear {props.item.clothing_type}
                </div>
            </div>
        </>
    )
}

export default ViewingItem