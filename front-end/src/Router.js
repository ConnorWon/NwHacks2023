import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Home from "./pages/Home"

import "./styles/Home.css"
import UploadImage from './pages/UploadImage'

export default function Router () {

    return (
        <>
            <link></link>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/uploadImage" element={<UploadImage/>} />
            </Routes>
        </>
    )
} 