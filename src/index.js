import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Routes from './routes';
import { store } from "./store";


const App = ()=>{
  return(
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}

ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>
,
 document.getElementById('root')
 );