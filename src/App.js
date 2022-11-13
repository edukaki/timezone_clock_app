import { useApi } from "./api/useApi/useApi";
import BtnMore from "./components/BtnMore";
import Clock from "./components/Clock";
import InfoMenu from "./components/InfoMenu";
import Quotes from "./components/Quotes"

function App() {
  const [getQuotes] = useApi("https://programming-quotes-api.herokuapp.com/quotes/random");

  return (
    <main className="l-main">
      <div className="container container--active">
        <div className="l-column">
          <Quotes quotes={getQuotes}/>
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
