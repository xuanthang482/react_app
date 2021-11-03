import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
Amplify.configure({
  Auth: {       
      // REQUIRED - Amazon Cognito Region
      region: 'us-east-2',
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'us-east-2_aWpdHgVJ0',
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: 'cm45ld75e4fn99gs7rf069ftj',
      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: true,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
