import React,{useEffect,useState} from 'react'
import database from "./firebaseinit"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Home, Kegiatan, Profile, Program, MediaLarva, AutomasiSpray, UmurLarva, Scanning} from "./pages"
import {Footer, Navigation} from "./components"

function App() {

  return (
    <div className='App bg-slate-50'>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/program" element={<Program />}></Route>
        <Route path="/kegiatan" element={<Kegiatan />}></Route>
        <Route path="/media-larva" element={<MediaLarva />}></Route>
        <Route path="/automasi-spray" element={<AutomasiSpray />}></Route>
        <Route path="/umur-larva" element={<UmurLarva />}></Route>
        <Route path="/scanning/:mediaid" element={<Scanning />}></Route>
      </Routes>
      <Footer />
  </BrowserRouter>
  </div>
  );
}

export default App;
