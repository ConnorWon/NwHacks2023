import "../styles/Profile.css";
import Header from "./Header";
import MasterList from "./MasterList";
import ViewItem from "./ViewItems";
import Wearing from "./Wearing";
import { useEffect, useState, useRef } from "react";
import axios, * as others from "axios";

const Profile = () => {
  const backendURL = "http://127.0.0.1:8000/";
  const [allItems, setAllItems] = useState([]);
  const [viewingItem, setViewingItem] = useState({});
  const [wearingItem, setWearingItem] = useState({
    top: "",
    bottom: "",
    shoes: "",
  });
  const [newVar, setNewVar] = useState({
    name: "",
    color: "",
    clothing_type: "",
    closet: 0,
  });

  useEffect(() => {
    verifyStorage();

    // Axios request to get all items from 1 person
    getAllItems();
  }, []);

  const getAllItems = async () => {
    const item = localStorage.getItem("item");

    // axios request
    var info = await axios.post(backendURL + "profile/", { username: item });
    // console.log(info);
    setNewVar({ ...newVar, closet: info.data[0].closet });
    setAllItems(info);
  };

  const verifyStorage = () => {
    const item = localStorage.getItem("item");

    if (!item) {
      // const info = await axios.post(backendURL + "login/", {
      //   username: item,
      // });
      window.location.replace("http://localhost:3000/Login");
      // if (typeof info === "undefined") {
      //   window.location.href("http://localhost.3000/login");
      // }
    }
  };

  const newState = (nextState) => {
    setViewingItem(nextState);
  };

  const setOutfit = (nextState) => {
    setWearingItem(nextState);
  };

  const addPopup = useRef();

  const handlePopUp = () => {
    if (addPopup.current.style.display === "block") {
      addPopup.current.style.display = "none";
    } else {
      addPopup.current.style.display = "block";
    }
  };

  return (
    <>
      <Header />
      <div id="mainPanel">
        <div id="left" className="column">
          <div id="masterListDiv">
            <MasterList allItems={allItems} setViewingItem={newState} />
          </div>
          <div
            id="addingButtonDiv"
            onClick={() => {
              handlePopUp();
            }}
          >
            Add Clothing
          </div>
          <div ref={addPopup} id="mainDiv2">
            <form>
              <div className="form__group field">
                {/* <label htmlFor="name" className="form__label">
                  Name:
                </label> */}
                <input
                  type="text"
                  placeholder="Name"
                  id="clothingName"
                  className="form__field"
                  onChange={(e) => {
                    setNewVar({ ...newVar, name: e.target.value });
                  }}
                ></input>
              </div>

              <div className="form__group field">
                <select
                  className="form__field"
                  placeholder="Clothing Type"
                  onChange={(e) => {
                    setNewVar({ ...newVar, clothing_type: e.target.value });
                  }}
                >
                  <option value="top">top</option>
                  <option value="bottom">bottom</option>
                  <option value="shoes">shoes</option>
                </select>
              </div>

              <div className="form__group field">
                {/* <label htmlFor="color">Color:</label> */}
                <input
                  type="text"
                  placeholder="Color"
                  id="clothingColor"
                  className="form__field"
                  onChange={(e) => {
                    setNewVar({ ...newVar, color: e.target.value });
                  }}
                ></input>
              </div>
              <button
                id="submitButton"
                onClick={async () => {
                  const abc = await axios.post(backendURL + "create/", {
                    clothing: newVar,
                  });
                  getAllItems();
                }}
              ></button>
            </form>
          </div>
        </div>
        <div id="middle" className="column">
          <ViewItem
            item={viewingItem}
            wearing={wearingItem}
            setWearingItem={setOutfit}
          />
        </div>
        <div id="right" className="column">
          <Wearing item={wearingItem} />
        </div>
      </div>
    </>
  );
};

export default Profile;
