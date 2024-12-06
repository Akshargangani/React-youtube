import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Leftpanel from './assets/componet/Leftpanel';
import Navbar from './assets/componet/Search';
import Videosection from './assets/componet/Play';
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="main-container">
      <Leftpanel/>
      <div className="content-container">
        <Navbar/>
        <Videosection/>
      </div>
    </div>
  </StrictMode>
);