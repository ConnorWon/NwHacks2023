import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import "./styles/Home.css"
import UploadImage from './pages/UploadImage'

export default function Router () {

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path='/profile' element={< Profile />}/>
                <Route path="/uploadImage" element={<UploadImage/>} />
            </Routes>
        </>
    )
} 