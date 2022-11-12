import BtnMore from "./components/BtnMore";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="container">
      <div className="l-column">
        <div className="c-title">
          <p>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
          <h5>Ada Lovelace</h5>
        </div>
        <Clock />
      </div>
      <div className="l-column">
        <BtnMore />
      </div>
    </div>
  );
}

export default App;
