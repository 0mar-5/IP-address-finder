import Header from "./Components/header/Header";
import Info from "./Components/Info/Info";
import Map from "./Components/map/Map";
import Loader from "./Components/loader/Loader";
import { fetchData } from "./utils/helpers";
import { API_URL } from "./utils/constants";
import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getIpInfo = async function () {
    try {
      const result = await fetchData(API_URL);
      setInfo({
        ip: result.ip,
        locationInfo: `${result.city} , ${result.country_name}`,
        isp: result.org,
        position: [result.latitude, result.longitude],
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getIpInfo();
  }, []);

  return (
    <>
      <Header />
      {!isLoading ? (
        <div className="container">
          <Info info={info} />
          <Map position={info.position} isLoading={isLoading} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
