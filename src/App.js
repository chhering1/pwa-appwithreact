import React from 'react';
import OneSignal from 'react-onesignal';
import { Router } from '@reach/router';
import Home from './components/Home'
import Page from './components/Page';

OneSignal.initialize('8a753e99-73aa-4f8f-8770-55e767c8e733', {
    safari_web_id: 'web.onesignal.auto.1a1cd43f-104c-4ac2-b069-e07775f1eeb9'
  });

function App()  {
    return (
           <Router>
              <Home path="/"/>
              <Page path="/page" />
           </Router>
    )
}
export default App;