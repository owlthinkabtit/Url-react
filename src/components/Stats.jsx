import Brand from "../assets/icon-brand-recognition.svg";
import Records from "../assets/icon-detailed-records.svg";
import Custom from "../assets/icon-fully-customizable.svg";

function Stats() {
  return (
    <section className="stats-area">
      <div className="container">
        <div className="stats-intro">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with <br />our
            advanced statistics dashboard.
          </p>
        </div>

        <div className="stats-card-container">
          <div className="stats-card">
            <div className="card-icon">
              {/* Note: Ensure these paths match your assets folder */}
              <img src={Brand} alt="" />
            </div>
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </div>

          <div className="stats-card">
            <div className="card-icon">
              <img src={Records} alt="" />
            </div>
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>

          <div className="stats-card">
            <div className="card-icon">
              <img src={Custom} alt="" />
            </div>
            <h3>Fully Customizable</h3>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;