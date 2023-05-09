
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// import * as React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from "./components/App";

// const container = document.getElementById('react_root');
// const react_root = createRoot(container);

// window.addEventListener('load', () => {
//     react_root.render(<React.StrictMode>
//         <App/>
//     </React.StrictMode>);
// });
// ReactDOM.createRoot(
//     document.getElementById("root"),
//   )
//   .render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   );