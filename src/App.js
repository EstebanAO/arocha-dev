import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function App() {
  return (
    <div id="main">
      <div id="container">
        <div class="container">
          <header>
            <h1>
              Esteban Arocha  
            </h1>
            <h2>
              Web and mobile developer
            </h2>
            <ul>
              <li style={{marginTop:"30px"}}>
                <p>
                  <a href="https://github.com/EstebanAO" target="_blank"> 
                    <FontAwesomeIcon style={{color:"#5f8cd2"}} size="2x" icon={faGithub} />
                  </a>
                </p>
                <a href="https://github.com/EstebanAO" target="_blank"> /EstebanAO </a>
              </li>
              <li style={{marginTop:"30px"}}>
                <p>
                  <a href="https://www.linkedin.com/in/estebanao/" target="_blank">
                    <FontAwesomeIcon style={{color:"#5f8cd2"}} size="2x" icon={faLinkedin} />
                  </a>
                </p>
                <a href="https://www.linkedin.com/in/estebanao/" target="_blank"> /estebanao</a>
              </li>
            </ul>    
          </header>
        </div>
      </div>
    </div>
    
  );
}

export default App;
