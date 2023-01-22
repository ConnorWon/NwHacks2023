import "../styles/Home.css"
import Header from "./Header"

export default function Home() {

    const toProfile = async () => {
        window.location.href = "http://localhost:3000/profile";
    };

    return (
        <>
            <Header />
            <div className="div-intro">
                <section>
                    <h1>Don't know what to wear?</h1>
                    <h2>
                        visit your closet any time, anywhere
                    </h2>

                    <button className="btn-slide"
                            onClick={() => {
                                toProfile();
                            }}
                        >
                        OPEN CLOSET
                    </button>

                </section>
            </div>

        </>
    )
}   