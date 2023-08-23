import React, { useState } from 'react';
import './App.css';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import appsData from './API'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedAppId, setExpandedAppId] = useState(null);

  const handleExpand = (appId) => {
    if (expandedAppId === appId) {
      setExpandedAppId(null);
    } else {
      setExpandedAppId(appId);
    }
  };

  const filteredApps = appsData.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <header>
        <center>
        <h1>Software984 Downloader</h1>
        <font color="red"><h6>if the download link of a specific platform is not working, it means the app is not supported on that platform</h6></font>
        <input className='form-control' onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Software...' />
        </center>
      </header>
      <br /><br /><br />
      <div className="row">
        {filteredApps.map(app => (
          <div class="card">
            <img src={app.iconUrl} class="card-img-top" alt="logo" height={250} />
            <div class="card-body">
              <h5 class="card-title">{app.name}</h5>
              <p class="card-text">{app.description}</p>
              <span className='fs-5'>Platforms:</span> <br /><br />
              <a href={app.downloadandroid} class="btn btn-primary"><AndroidIcon /> Android Download</a><br /><br />
              <a href={app.ios} class="btn btn-primary"><AppleIcon />IOS Download</a><br /><br />
              <a href={app.downloadpc} class="btn btn-primary"><MicrosoftIcon />Windows Download</a><br /><br />
              <a href={app.downloadmac} class="btn btn-primary"><LaptopMacIcon /> Mac Download</a><br /><br />
            </div>
            <br /><br /><br /><br />
          </div>
          
        ))}
        
      </div>
    </div>
  );
}

export default App;
