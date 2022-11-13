import { useApi } from "./api/useApi/useApi";
import BtnMore from "./components/BtnMore";
import Clock from "./components/Clock";
import InfoMenu from "./components/InfoMenu";
import Quotes from "./components/Quotes"

function App() {
  const [dataClock, isLoaded, error] = useApi("http://worldtimeapi.org/api/ip");
  const [getQuotes] = useApi("https://programming-quotes-api.herokuapp.com/quotes/random");
  const [location] = useApi("https://api.ipgeolocation.io/ipgeo?apiKey=51765e4a180b43ed9c232935a781ac71")

  return (
    <main className="l-main">
      <div className="container container--active">
        <div className="l-column">
          <Quotes quotes={getQuotes}/>
          <Clock location={location} dataClock={dataClock} isLoaded={isLoaded} error={error} />
        </div>
        <div className="l-column">
          <BtnMore />
        </div>
      </div>
        <InfoMenu data={dataClock} />
    </main>
  );
}

export default App;
