import { useEffect, useRef, useState } from 'react'


const Header = () => {

    const [localStorageItem, setLocalItem] = useState({
        item: ""
    })


    useEffect(() => {
        checkStorage()
    }, [localStorageItem])

    useEffect(() => {
        var localStorageCookie = localStorage.getItem('info')
        window.addEventListener('storage', () => {

            // When local storage changes, dump the list to
            // the console.
            if (!localStorageCookie) return
            setLocalItem({ item: localStorageCookie })
        })
    }, [])


    const headerSignout = useRef()

    const checkStorage = () => {
        const item = localStorage.getItem("item")

        if (item) {
            if (headerSignout.current.style.display === "block") {
                headerSignout.current.style.display = "none";
            } else {
                headerSignout.current.style.display = "block";
            }
        }
    }

    return (
        <>
            <header>
                <h1 className="logo">Artificial Closets</h1>
                <ul>
                    <li><a href="/" className="back-to-top-link"> Home </a></li>
                    <li><a href="/profile"> Profile </a></li>
                    <li><a ref={headerSignout} href="/profile" id="headerSignout" onClick={() => {
                        localStorage.removeItem("item")
                        localStorage.removeItem("key")
                    }}> Signout </a></li>
                </ul>
            </header>
        </>)
}

export default Header