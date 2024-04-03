import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// решение 1.1.6
const element = React.createElement(
  "h3",
  null,
  "Люк, я\u00A0твой\u00A0отец!\u00A0\u00A9"
);
root.render(element);

