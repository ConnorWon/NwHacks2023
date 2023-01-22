import "../styles/Profile.css"
import Header from "./Header"
import MasterList from "./MasterList"
import ViewItem from "./ViewItems"
import Wearing from "./Wearing"
import { useEffect, useState } from 'react'
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


    return (
        <>
            <Header />
            <div id="mainPanel">
                <div id="left" className="column">
                    <div id="masterListDiv">
                        <MasterList allItems={allItems} setViewingItem={setViewingItem}/>
                    </div>
                    <div id="addingButtonDiv">
                        {/* Button to add new clothing */}
                    </div>
                </div>
                <div id="middle" className="column">
                    <ViewItem item={viewingItem}/>
                </div>
                <div id="right" className="column">
                    <Wearing />
                </div>
            </div>
        </>
    )
}

export default Profile