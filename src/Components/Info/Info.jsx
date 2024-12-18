import "./Info.css";

function Info({ info }) {
  const { ip, locationInfo, isp } = info;
  return (
    <section>
      <div className="info">
        <h3>What is my IP address ?</h3>
        <p className="ip-address">{ip}</p>
      </div>
      <div className="info">
        <h3>Approximate Location :</h3>
        <p className="location">{locationInfo}</p>
      </div>
      <div className="info">
        <h3>Internet Service Provider (ISP)</h3>
        <p className="isp">{isp}</p>
      </div>
    </section>
  );
}

export default Info;
