import { useState, useEffect } from 'react'
import './App.css'
import { Home } from '/src/components/home';
// import { Products } from '/src/components/products';
// import { Contact } from '/src/components/contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const detail = {
    header: {logo: '/VV_logo_extended.png'},
    footer: {textFooter: '© 2024. All Rights Reserved.'}
  }
  console.log("detail: ", detail)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home header={detail?.header} footer={detail?.footer} home={detail?.home} />} />
        {/* <Route path="/products" element={<Products header={detail?.header} footer={detail?.footer} aboutus={detail?.aboutus} />} />
        <Route path="/contact" element={<Contact header={detail?.header} footer={detail?.footer} faq={detail?.faq} />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
