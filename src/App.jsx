import Header from "./Components/header/Header";
import Info from "./Components/Info/Info";
import Map from "./Components/map/Map";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Info />
        <Map />
      </div>
    </>
  );
}

export default App;
