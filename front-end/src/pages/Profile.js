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
    const closet = localStorage.getItem("key");

    // axios request
    var info = await axios.post(backendURL + "profile/", { username: item });
    // console.log(info);
    setNewVar({ ...newVar, closet: closet });
    setAllItems(info);
  };

  const verifyStorage = () => {
    const item = localStorage.getItem("item");

    if (!item) {
      window.location.replace("http://localhost:3000/Login");
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
              <div className="form__group field">
                <label htmlFor="clothingType">Type:</label>
                <select
                  className="form__field"
                  id="clothingType"
                  onChange={(e) => {
                    setNewVar({ ...newVar, clothing_type: e.target.value });
                  }}
                >
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                  <option value="shoes">Shoes</option>
                </select>
              </div>
              <button
                id="submitButton"
                onClick={async () => {
                  if (
                    newVar.username !== "" &&
                    newVar.color !== "" &&
                    newVar.type !== ""
                  ) {
                    await axios.post(backendURL + "create/", {
                      clothing: newVar,
                    });
                    getAllItems();
                  }
                }}
              >
                Submit
              </button>
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
