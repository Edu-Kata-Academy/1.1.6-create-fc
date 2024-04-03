import ReactDOM from "react-dom/client";
import './index.css'

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

// решение 1.1.8
function App() {
  return <h3>Люк, я&nbsp;твой&nbsp;отец!&nbsp;&copy;</h3>;
}
root.render(<App />);
