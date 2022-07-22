import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application


// import '../styles/globals.css'
// // import Head from 'next/head'
// // import Header from '@components/Header'
// // import Footer from '@components/Footer'
// import React, {useState} from 'react';
// // import './App.css';
// import AboutMe from './Components/AboutMe';
// import ContactMe from './Components/ContactMe';
// import Photos from './Components/Photos';
// import Services from './Components/Services';
// import Navigation from './Components/Navigation';
// import vanLife from '../styles/vanLifeGif.gif'

// export default function Home() {
//   const pages =["About Me", "Services", "Contact Me", "Photos/Videos"]
//   const [page, setPage] = useState(pages[0])
//   return (
    
//     <div className="App">
//     <h1>The Traveler's K9 <img src={vanLife} className="img-fluid" id="vanLife" alt="Van Life"/></h1>  
//     <Navigation pages={pages} page={page} setPage={setPage} />
//     {page==="About Me"? <AboutMe /> :null}
//     {page==="Services"? <Services /> :null}
//     {page==="Contact Me"? <ContactMe /> :null}
//     {page==="Photos/Videos"? <Photos /> :null}
//     <div id='theRest'></div>
//     </div>
//   );
// }