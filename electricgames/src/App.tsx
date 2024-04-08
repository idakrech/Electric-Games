import Router from "./Navigation/Router";
import background from "../src/Images/background.jpg";

function App() {
  return (
    <div style={{backgroundImage: `url(${background})`, backgroundSize: "auto", backgroundAttachment: "fixed", height: "350vh"}}>
      <Router/>
    </div>
  )
}

export default App;
