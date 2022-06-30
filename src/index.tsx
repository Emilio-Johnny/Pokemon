import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

// function AppWithCallbackAfterRender() {
//     useEffect(() => {
//         console.log('rendered');
//     });
//
//     // @ts-ignore
//     return <App />
// }
// document.addEventListener("DOMContentLoaded", function(event) {
//     const container = document.getElementsByClassName('app');
//     const newContainer = Array.prototype.slice.call(container);
//     console.log(newContainer);
//     const root = createRoot(newContainer[0]);
//     root.render(<AppWithCallbackAfterRender/>);
// });
 ReactDOM.render(<App />, document.getElementById('createRoot'));
// root.unmount();

