import { useState, useEffect } from 'react'
import './App.css'
import { Home } from '/src/components/home';
import { MyWeek } from '/src/components/myweek';
import { Contact } from '/src/components/contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyWeekPrivacy from './components/myweek-privacy';
import MyWeekTOS from './components/myweek-tos';
import MyWeekHTU from './components/myweek-htu';

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
      logo:'MW_logo_extended.png',
      cards: ['presi1.png','presi2.png','presi3.png','presi4.png'],
      video: 'Myweek_video1.mp4',
      htuPic:'Howtouse.jpg',
      htuTitle:'How to use', 
      privacyPic:'Privacypolicy.jpg',
      privacyTitle:'Privacy Policy',
      tosPic:'Termsofservice.jpg', 
      tosTitle:'Terms of Service',
      pricingText1:'Start free.',
      pricingText2:'Choose a plan later.',
      pricingText3:'Get started with a 14 day free trial, then your', 
      pricingText4:'team can enjoy all the features for just',
      pricingTextCardTitle1:'Full year',
      pricingTextCardAmount1:'$7',
      pricingTextCardTimeline1:'month (billed yearly)',
      pricingTextCardTitle2:'Full month',
      pricingTextCardAmount2:'$9',
      pricingTextCardTimeline2:'month (billed monthly)',
      installNowTitle:'Get MyWeek Now!',
      privacyPath: 'https://view.monday.com/8964716204-95b8f950bb30f8a4161dec389eb2f8d5?r=use1',
      tosPath: 'https://view.monday.com/3826151999-fd9d172809e2548360111dc8c9182e23?r=use1',
      htuPath: 'https://view.monday.com/5081062502-ce52274974268e83c8ca66013de75577?r=use1',
    }
  }
  console.log("detail: ", detail)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home header={detail?.header} footer={detail?.footer} home={detail?.home} />} />
        <Route path="/myweek" element={<MyWeek header={detail?.header} footer={detail?.footer} myweek={detail?.myweek} />} />
        <Route path="/myweek-privacy" element={<MyWeekPrivacy header={detail?.header} footer={detail?.footer} myweek={detail?.myweek} />} />
        <Route path="/myweek-tos" element={<MyWeekTOS header={detail?.header} footer={detail?.footer} myweek={detail?.myweek} />} />
        <Route path="/myweek-htu" element={<MyWeekHTU header={detail?.header} footer={detail?.footer} myweek={detail?.myweek} />} />
        <Route path="/contact" element={<Contact header={detail?.header} footer={detail?.footer} contact={detail?.contact} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
