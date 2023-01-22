import React from "react";
import "../styles/UploadImage.css";


export default function UploadImage() {
    




    return (
        <>
        <div id="mainDiv2">

            
         

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
    

    
        

            
        </>
        
    )
}
    

