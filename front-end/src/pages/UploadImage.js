import React from "react";
import "../styles/UploadImage.css";


export default function UploadImage() {
    




    return (
        <>
        <div id="mainDiv">

            
         

            <form>
                <div class="nameGroup">
                    <label for="name">Name:</label>
                    <input type="text" placeholder="Name" id="clothingName"></input>
                </div>

                <div class="typeGroup">
                    <label for="type">Type:</label>
                    <input type="text" placeholder="Type: Top, Bottom, Shoes" id="clothingType"></input>

                </div>

                <div class="colorGroup">
                    <label for="color">Color:</label>
                    <input type="text" placeholder="Color" id="clothingColor"></input>
                </div>

                <div class="fileGroup">
                    <label for="imageFile">Upload image:</label>
                    <input type="file" id="clothingFile" name="imageFile"></input>

                </div>
                
                
                

                
            
            </form>

        
        </div>
    

    
        

            
        </>
        
    )
}
    

