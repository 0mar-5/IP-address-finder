import Header from "./Components/header/Header";
import Info from "./Components/Info/Info";
import Map from "./Components/map/Map";
import { fetchData } from "./utils/helpers";
import { API_URL } from "./utils/constants";
import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState({ ip: "", locationInfo: "", isp: "" });

  async function getIpInfo() {
    try {
      const result = await fetchData(API_URL);
      console.log(result);
      setInfo({
        ip: result.ip,
        locationInfo: `${result.city} , ${result.country_name}`,
        isp: result.org,
      });

      console.log(result.ip, result.city);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getIpInfo();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <Info info={info} />
        <Map />
      </div>
    </>
  );
}

export default App;
