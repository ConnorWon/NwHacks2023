import { useEffect } from 'react'

const ViewingItem = (props) => {

    useEffect(() => {

    }, [props.item])

    return (
        <>
            <div>
                {props.item.name}
            </div>
        </>
    )
}

export default ViewingItem