import "../styles/Profile.css"
import Header from "./Header"
import MasterList from "./MasterList"
import Item from "./Item"
import Wearing from "./Wearing"

const Profile = () => {



    return (
        <>
            <Header />
            <div id="mainPanel">
                <div id="left" className="column">
                    <div id="masterListDiv">
                        <MasterList />
                    </div>
                    <div id="addingButtonDiv">
                        {/* Button to add new clothing */}
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