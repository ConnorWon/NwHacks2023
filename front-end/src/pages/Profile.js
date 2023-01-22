import "../styles/Profile.css"
import Header from "./Header"
import MasterList from "./MasterList"
import Item from "./Item"
import Wearing from "./Wearing"
import UploadImage from "./UploadImage"
import {useRef} from 'react'


const Profile = () => {
    const addPopup = useRef();

    const handlePopUp = () => {
        if (addPopup.current.style.display === "block") {
            addPopup.current.style.display="none"
        } else {
            addPopup.current.style.display="block"
        }
            
        
        
    }

    return (
        <>
            <Header />
            <div id="mainPanel">
                <div id="left" className="column">
                    <div id="masterListDiv">
                        <MasterList />
                    </div>
                    <div id="addingButtonDiv" onClick={() => {
                        handlePopUp();
                    }}>
                <div>Add Clothing</div>
                    <div ref={addPopup} id="mainDiv2">

                        <form>
                            <div className="nameGroup">
                                <label htmlFor="name">Name:</label>
                                <input type="text" placeholder="Name" id="clothingName"></input>
                            </div>

                            <div className="typeGroup">
                                <label htmlFor="type">Type:</label>
                                <input type="text" placeholder="Type: Top, Bottom, Shoes" id="clothingType"></input>

                            </div>

                            <div className="colorGroup">
                                <label htmlFor="color">Color:</label>
                                <input type="text" placeholder="Color" id="clothingColor"></input>
                            </div>

                            <div className="fileGroup">
                                <label htmlFor="imageFile">Upload image:</label>
                                <input type="file" id="clothingFile" name="imageFile"></input>

                            </div>
                    
                        </form>

                    </div>
                    </div>
                </div>
                <div id="middle" className="column">
                    <Item />
                </div>
                <div id="right" className="column">
                    <Wearing />
                </div>
            </div>


            
        </>
    )
}

export default Profile