import "../styles/Home.css"
import Header from "./Header"

export default function Home() {

    return (
        <>
            <Header />
            <div className="div-intro">
                <section>
                    <h1>Don't know what to wear?</h1>
                    <h2>
                        visit your closet any time, anywhere
                    </h2>

                    <button className="btn-slide">OPEN CLOSET</button>

                </section>
            </div>

        </>
    )
}   