import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import DashBoard from "../pages/DashBoard"
import MySpace from "../pages/MySpace"
import ShareSpaces from "../pages/ShareSpaces"
import Wiki from "../pages/Wiki"
import Lingo from "../pages/Lingo"
import Favorite from "../pages/Favorite"
import Trash from "../pages/Trash"
import Sheet from "../pages/Sheet"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/dashboard' element={<DashBoard/>}/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/my-spaces" element={<MySpace/>} />
        <Route path="/share-spaces" element={<ShareSpaces/>} />
        <Route path="/wiki" element={<Wiki/>} />
        <Route path="/lingo" element={<Lingo/>} />
        <Route path="/favorites" element={<Favorite/>} />
        <Route path="/trash" element={<Trash/>} />
        <Route path="/sheet" element={<Sheet/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router