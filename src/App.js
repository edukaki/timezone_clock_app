import BtnMore from "./components/BtnMore";
import Clock from "./components/Clock";
import InfoMenu from "./components/InfoMenu";
import Quotes from "./components/Quotes"

function App() {
  return (
    <main className="l-main">
      <div className="container container--active">
        <div className="l-column">
          <Quotes />
          <Clock />
        </div>
        <div className="l-column">
          <BtnMore />
        </div>
      </div>
        <InfoMenu />
    </main>
  );
}

export default App;
