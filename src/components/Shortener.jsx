import { useState } from "react";

function Shortener() {
  const [input, setInput] = useState("");
  const [links, setLinks] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <section id="shorten-area">
      <div className="container">
        <div className="shorten_container">
          <form className="shorten-form">
            <div className="input-control">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <span className="error-msg">Please add a link</span>
            </div>
            <button type="submit" class="btn-cyan">
              Shorten It!
            </button>
          </form>
        </div>
        {links.map((link, index) => (
          <div key={index} className="link=card">
            <span>{link.long}</span>
            <span className="short-url">{link.short}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shortener;
