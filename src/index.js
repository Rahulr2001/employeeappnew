import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Amplify from 'aws-amplify'

const myAppConfig = {
  'aws_appsync_graphqlEndpoint': 'https://vuxa4a4njzbddl3zw3nvtl5q54.appsync-api.us-east-1.amazonaws.com/graphql',
  'aws_appsync_region': 'us-east-1',
  'aws_appsync_authenticationType': 'API_KEY',
  'aws_appsync_apiKey': 'da2-thdpdaj4xjdkzded7rsuwcboze',
}

Amplify.configure(myAppConfig);


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
