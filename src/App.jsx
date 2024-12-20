import { useState, useEffect } from 'react'
import './App.css'
import { Home } from '/src/components/home';
import { MyWeek } from '/src/components/myweek';
import { Contact } from '/src/components/contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const detail = {
    header: {logo: '/VV_logo_extended.png'},
    home: { heroTitle:'We Empower Businesses',
            heroSubtitle:'We build Micro SaaS Solutions',
            pic1:'failfast.jpg',
            title1:'Fail fast',
            text1:'We encorage our team to learn fast and automate as much as possible.',
            pic2:'adoptadapt.jpg',
            title2:'Adopt & Adapt',
            text2:'Lets use what is working and make it better.',
            pic3:'customerfocus.jpg', 
            title3:'Customer focus',
            text3:'We are always looking for the next pain to solve and how to improve our solutions. We love feedback.',
    },
    footer: {textFooter: '© 2024. All Rights Reserved.',
            youtubeIcon:'youtube Icon.png',
            xIcon:'X Icon.png'
    },
    contact: {pic1:'office.jpg',
              title:'Contact us today',
              subtitle:'Discover how our solutions can help you achieve your goals.',
              salesEmail:'sales.growth@virtualvines.io',
              supportEmail: 'support.service@virtualvines.io'
    },
    myweek:{
      logo:'MW_logo_extended.png'
    }
  }
  console.log("detail: ", detail)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home header={detail?.header} footer={detail?.footer} home={detail?.home} />} />
        <Route path="/MyWeek" element={<MyWeek header={detail?.header} footer={detail?.footer} myweek={detail?.myweek} />} />
        <Route path="/contact" element={<Contact header={detail?.header} footer={detail?.footer} contact={detail?.contact} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
