import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/home";
import Hotels from "./pages/List/List";
import HotelsDetail from "./pages/Hotels/hotelDetail";
import "./App.scss";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Notification from "./pages/notification/notification";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelsDetail />} />
        </Routes>
      </BrowserRouter>
      <Notification/>
    </>
  );
}

export default App;
