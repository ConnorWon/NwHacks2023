import "../styles/Home.css"
import Header from "./Header"

export default function Home() {

    return(
        <>
        <Header/>
        <div class="div-intro">
            <section>
                <h1>Don't know what to wear?</h1>
                <h2>Hi All, 1) I have posted solutions to today's quiz, and solutions to all of the questions in quiz assignment 2. Please review the solutions to assignment 2.
                </h2>

                <button onclick="clickreview()" class="btn-slide">OPEN CLOSET</button>

            </section>
            
        </div>
           
        </>
    )
}   