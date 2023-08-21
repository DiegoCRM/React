import "./App.css";

import diego from "./assets/diego-1.jpg"
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
  return (
    <>
      <div className="App">
        <h1>Avançando em React</h1>
        {/* imagem em public */}
        <div>
          <img src="/diego-2.jpg" alt="makingof" />
        </div>
        {/* Imagem em asset */}
        <div>
        <img src={diego} alt="almoço" />
        </div>

        <ManageData/>

        <ListRender/>

        <ConditionalRender/>
      </div>
    </>
  );
}

export default App;
