import "../styles/Profile.css"
import Header from "./Header"
import MasterList from "./MasterList"
import ViewItem from "./ViewItems"
import Wearing from "./Wearing"
import { useEffect, useState, useRef } from 'react'
import axios, * as others from "axios";

const Profile = () => {
    const backendURL = "http://127.0.0.1:8000/";
    const [allItems, setAllItems] = useState([])
    const [viewingItem, setViewingItem] = useState({})

    useEffect(() => {

        verifyStorage()

        // Axios request to get all items from 1 person
        setAllItems()
    }, [])


    const verifyStorage = async () => {
        const item = localStorage.getItem("item")

        if (item) {
            const info = await axios.get(backendURL + "login/", item);
            if (!info) {
                console.log("failed")
            }
        }
    }

    const addPopup = useRef();

    const handlePopUp = () => {
        if (addPopup.current.style.display === "block") {
            addPopup.current.style.display = "none"
        } else {
            addPopup.current.style.display = "block"
        }
    }

    return (
        <>
            <Header />
            <div id="mainPanel">
                <div id="left" className="column">
                    <div id="masterListDiv">
                        <MasterList allItems={allItems} setViewingItem={setViewingItem} />
                    </div>
                    <div id="addingButtonDiv" onClick={() => {
                        handlePopUp();
                    }}>
                        Add Clothing
                    </div>
                    <div ref={addPopup} id="mainDiv2">

                            <form>
                                <div className="nameGroup">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" placeholder="Name" id="clothingName"></input>
                                </div>

                                <div className="typeGroup">
                                    <label htmlFor="type">Type:</label>
                                    <input type="text" placeholder="Top, Bottom, Shoes" id="clothingType"></input>
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
                <div id="middle" className="column">
                    <ViewItem item={viewingItem} />
                </div>
                <div id="right" className="column">
                    <Wearing />
                </div>
            </div>



        </>
    )
}

export default Profile