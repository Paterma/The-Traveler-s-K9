import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, {useState} from 'react';
import AboutMe from '@components/AboutMe';
import ContactMe from '@components/ContactMe';
import Photos from '@components/Photos';
import Services from '@components/Services';
import Navigation from '@components/Navigation';
import Airbus from '@components/airbus.png';
import vanLife from '@components/vanlifeGif.gif'


export default function Home() {
  const pages =["About Me", "Services", "Contact Me", "Photos/Videos"]
  const [page, setPage] = useState(pages[0])
  return (

  )
}

// <div className="App">
// <h1>The Traveler's K9 <img src={vanLife} className="img-fluid" id="vanLife" alt="Van Life"/></h1>  
// <Navigation pages={pages} page={page} setPage={setPage} />
// {page==="About Me"? <AboutMe /> :null}
// {page==="Services"? <Services /> :null}
// {page==="Contact Me"? <ContactMe /> :null}
// {page==="Photos/Videos"? <Photos /> :null}
// <div id='theRest'></div>
// </div>