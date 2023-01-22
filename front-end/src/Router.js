import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Home from "./pages/Home"

import "./styles/Home.css"

export default function Router () {

    return (
        <>
            <link></link>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    )
} 