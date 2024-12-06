import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone, faTh, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome, faCompass, faVideo, faThLarge, faPhotoVideo, faHistory, faPlayCircle, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
    return (
      <>
        <div className="sidebar">
            <img src="https://storage.googleapis.com/a1aa/image/HswFceAsrk2zEa7IqRy3h7GMDHF3o6Wplfikc0TRYVFTCN4TA.jpg" alt="YouTube Logo" width="100" height="50" />
            <a className="menu-item active" href="#"> 
              <FontAwesomeIcon icon={faHome} /> Home </a> 
            <a className="menu-item" href="#"> 
              <FontAwesomeIcon icon={faCompass} /> Explores </a> 
            <a className="menu-item" href="#"> 
                <FontAwesomeIcon icon={faVideo} /> Shorts </a> 
            <a className="menu-item" href="#"> 
                <FontAwesomeIcon icon={faThLarge} /> Subscriptions </a> 
            <div className="divider"></div> 
              <a className="menu-item" href="#"> 
                <FontAwesomeIcon icon={faPhotoVideo} /> Library </a> 
              <a className="menu-item" href="#"> 
                <FontAwesomeIcon icon={faHistory} /> History </a> 
              <a className="menu-item" href="#"> 
                <FontAwesomeIcon icon={faPlayCircle} /> Your videos </a> 
              <a className="menu-item" href="#"> 
                <FontAwesomeIcon icon={faClock} /> Watch later </a> 
              <a className="menu-item" href="#"> 
                <FontAwesomeIcon icon={faThumbsUp} /> Liked videos </a>
                <div className="subscriptions">
  <h3>SUBSCRIPTIONS</h3>
  <a className="subscription-item" href="#">
    <img src="https://storage.googleapis.com/a1aa/image/mKyFzE6aOdpGEpW95YWcZ8LvCjFzZkptRTq39tsGg3OiQDeJA.jpg" alt="Nadir On The Go" width="30" height="30" />
    <div className="text">
      Nadir On The Go 
      <span className="dot">•</span>
    </div>
  </a>
  <a className="subscription-item" href="#">
    <img src="https://storage.googleapis.com/a1aa/image/5KlkpfaXidxuV6dJCO8MQ7mh2dmeVnnuTWH3ClcHg5CRCN4TA.jpg" alt="Coke Studio Bangla" width="30" height="30" /> 
    <div className="text">
      Coke Studio Bangla 
      <span className="dot">•</span>
    </div>
  </a>
  <a className="subscription-item" href="#">
    <img src="https://storage.googleapis.com/a1aa/image/UdHiGUSsEiI9B9RbsNVnPjHJzWfQyKQYPuWjr72xLdrHhG8JA.jpg" alt="MKBHD" width="30" height="30" /> 
    <div className="text">
      MKBHD 
      <span className="dot">•</span>
    </div>
  </a>
  <a className="subscription-item" href="#">
    <img src="https://storage.googleapis.com/a1aa/image/mwYxxVmq65K8C1PCkkdS4lyvX0YCMyHpVnhtLvf73PHGhG8JA.jpg" alt="Figma" width="30" height="30" /> 
    <div className="text">
      Figma 
      <span className="dot">•</span>
    </div>
  </a>
  <a className="subscription-item" href="#">
    <img src="https://storage.googleapis.com/a1aa/image/5fQqOjtFEd1RZ6zj6oPsn51zrG2RHMEnn4pnTS7NCkDHhG8JA.jpg" alt="ATC Android ToTo C..." width="30" height="30" /> 
    <div className="text">
      ATC Android ToTo C...
      <span className="dot">•</span>
    </div>
  </a>
  <a className="subscription-item" href="#">
    <img src="https://storage.googleapis.com/a1aa/image/4mbZXjDoiaYLHdWwQPZpaR37FQKW9v5oFCXJAhBy4utiQDeJA.jpg" alt="Alux.com" width="30" height="30" /> 
    <div className="text">
      Alux.com 
      <span className="dot">•</span>
    </div>
  </a>
</div>

        </div>
        <div className="header">
          <input placeholder="Search" type="text"/>
          <div className="icons"> 
            <FontAwesomeIcon icon={faSearch} /> 
            <FontAwesomeIcon icon={faMicrophone} /> 
            <FontAwesomeIcon icon={faTh} /> 
            <FontAwesomeIcon icon={faBell} /> 
            <FontAwesomeIcon icon={faUserCircle} /> 
            </div>
       </div>
       <div className="tags">
          <button className="active">All</button>
          <button>Cook Studio</button>
          <button>UX</button>
          <button>Case Study</button>
          <button>Music</button>
          <button>Bnagla Lofi</button>
          <button>Tour</button>
          <button>Saintmartin</button>
          <button>Tech</button>
          <button>iPhone 13</button>
          <button>User Interface Design</button>
          <button>Computer</button>
       </div>
       <div className="video-grid">
        <div className="video-card">
          <img alt="Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita" height="200" src="https://storage.googleapis.com/a1aa/image/AZ1HweTGPdWeH0Lly1J8oOmYQp01LB60VyRixmhR2JpKBO4TA.jpg" width="300"/>
          <div className="video-info">
            <h4>
              Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita
            </h4>
            <div className="channel">
              <img alt="Coke Studio Bangla" height="100" src="https://storage.googleapis.com/a1aa/image/DAcoMiHwCt7wKRoLvCHBSqT3mlY96Oy8ovzdAnifaq8dAH8JA.jpg" width="100"/>
              <span>
                Coke Studio Bangla
              </span>
            </div>
            <p>
              1.5M views • 2 days ago
            </p>
          </div>
        </div>
        <div className="video-card">
          <img alt="Infinix Note 12 : AMOLED Helio G88 SoC!" height="200" src="https://storage.googleapis.com/a1aa/image/K7Xx7fQfk0rQ709Sk1JSk3SQfCS326JpSnp2AFzdUO94BcwnA.jpg" width="300"/>
          <div className="video-info">
            <h4>
              Infinix Note 12 : AMOLED Helio G88 SoC!
            </h4>
            <div className="channel">
              <img alt="ATC Andriod ToTo Company" height="100" src="https://storage.googleapis.com/a1aa/image/d5nQUyw04DIKPldzdM0Nug5ukGOPFqoWEO1UcfinfATzAO4TA.jpg" width="100"/>
              <span>
                ATC Andriod ToTo Company
              </span>
            </div>
            <p>
              4.2M views • 2 days ago
            </p>
          </div>
        </div>
        <div className="video-card">
          <img alt="My first UX Design case study - This got me my first job." height="200" src="https://storage.googleapis.com/a1aa/image/ex2tNmNflNvNWEIlaYzApFAI91hlXfjbMEaXDHi5V6TNCcwnA.jpg" width="300"/>
          <div className="video-info">
            <h4>
              My first UX Design case study - This got me my first job.
            </h4>
            <div className="channel">
              <img alt="Saptarshi Prakash" height="100" src="https://storage.googleapis.com/a1aa/image/QhQwBtl4kiowM1q5XnSlfdEEiYBTInz5vTSoRhHfaBj5AO4TA.jpg" width="100"/>
              <span>
                Saptarshi Prakash
              </span>
            </div>
            <p>
              4.8K views • 1 years ago
            </p>
          </div>
        </div>
        <div className="video-card">
          <img alt="My Mix" height="200" src="https://storage.googleapis.com/a1aa/image/eCZidEmAW1QQdCxCJbf3q7OuOjmlcg1hTUERm3eRVOmqBcwnA.jpg" width="300"/>
          <div className="video-info">
            <h4>
              My Mix
            </h4>
            <div className="channel">
              <img alt="Lopamudra Mitra, Anupam Roy, and more" height="100" src="https://storage.googleapis.com/a1aa/image/qAItUTbkMW6YM5TzLDPNY7g1r1wHRFZBsGOXceSFebRBBO4TA.jpg" width="100"/>
              <span>
                Lopamudra Mitra, Anupam Roy, and more
              </span>
            </div>
            <p>
              60 Lakhs+ views
            </p>
          </div>
        </div>
        <div className="video-card">
          <img alt="UX Design - What is it? (From AJ &amp;Smart)" height="200" src="https://storage.googleapis.com/a1aa/image/0eWFPrf1Aut2TUA5LdwG18OLmDMy4ZU2pUQdQebOTrz6BcwnA.jpg" width="300"/>
          <div className="video-info">
            <h4>
              UX Design - What is it? (From AJ &amp;Smart)
            </h4>
            <div className="channel">
              <img alt="AJ&amp;Smart" height="100" src="https://storage.googleapis.com/a1aa/image/Oow10qFQZeRiJSVPe0DRl2TK66RKEUo3nDIKKE5dv0CIBO4TA.jpg" width="100"/>
              <span>
                AJ&amp;Smart
              </span>
            </div>
            <p>
              150K views • 3 years ago
            </p>
            </div>
        </div>
        <div className="video-card">
          <img alt="Mix - Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika" height="200" src="https://storage.googleapis.com/a1aa/image/xuUkcPY01YKePKdZWDaJdaQWdJNMiUgKvGNGeAygPHZJBO4TA.jpg" width="300"/>
          <div className="video-info">
            <h4>
              Mix - Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika
            </h4>
            <div className="channel">
              <img alt="Mohon Sharif, Odd Signature, Shayan Chowdhury Arnob, and more" height="100" src="https://storage.googleapis.com/a1aa/image/XkicF0hJcmIuFFOjCnEiLGe463L3bT7sDeYeqOqOgeJYD4gPB.jpg" width="100"/>
              <span>
                Mohon Sharif, Odd Signature, Shayan Chowdhury Arnob, and more
              </span>
            </div>
            <p>
              Views not available
            </p>
          </div>
        </div>
        <div className="video-card">
          <img alt="48 VISA-FREE" height="200" src="https://storage.googleapis.com/a1aa/image/cjbGuhl1QB5tIB2Qk9UkZRZOlQbUNOvqhqWK5WuC3WIOgDeJA.jpg" width="300"/>
          <div className="video-info">
            <h4>
              48 VISA-FREE
            </h4>
            <div className="channel">
              <img alt="Nadir On The Go" height="100" src="https://storage.googleapis.com/a1aa/image/qFGwQ4czBIoXL5w2KFijeLMI5pD4LSQeQXQkgs86ZgFfBcwnA.jpg" width="100"/>
              <span>
                Nadir On The Go
              </span>
            </div>
            <p>
              1.7M views • 1 years ago
            </p>
          </div>
        </div>
        <div className="video-card">
          <img alt="14 Advanced Tips to Design FASTER in Figma" height="200" src="https://storage.googleapis.com/a1aa/image/6gwcl4w0u8J7ERCDDDgS1V2jwtUt11gklJB4qgbTTRORgDeJA.jpg" width="300"/>
          <div className="video-info">
            <h4>
              14 Advanced Tips to Design FASTER in Figma
            </h4>
            <div className="channel">
              <img alt="Mizko" height="100" src="https://storage.googleapis.com/a1aa/image/SToaYqiZwzafI6Xnpen9muwJLWmMAQI5DSrUuJ2f8ueJD4gPB.jpg" width="100"/>
              <span>
                Mizko
              </span>
            </div>
            <p>
              53K views • 1 years ago
            </p>
          </div>
          </div>
       </div>
       </>
    );
};

export default App;
