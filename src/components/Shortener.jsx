import { useState } from "react";

function Shortener() {
  const [input, setInput] = useState("");
  const [links, setLinks] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input) return;

    const dataToSend = new URLSearchParams();
    dataToSend.append("url", input);

    try {
      const response = await fetch("https://spoo.me/", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          "X-Spoo-Key": import.meta.env.VITE_SPOO_KEY,
        },
        body: dataToSend,
      });

      const data = await response.json();

      const newLink = {
        long: input,
        short: data.short_url,
      };

      setLinks([newLink, ...links]);
      setInput("");
    } catch (error) {
      console.error("There was an error shortening your link:", error);
    }
  };

  return (
    <section id="shorten-area">
      <div className="container">
        <div className="shorten_container">
          <form className="shorten-form" onSubmit={handleSubmit}>
            <div className="input-control">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <span className="error-msg">Please add a link</span>
            </div>
            <button type="submit" className="btn-cyan">
              Shorten It!
            </button>
          </form>
        </div>
        {links.map((link, index) => (
          <div key={index} className="link-card">
            <span className="long-url">{link.long}</span>
            <span className="short-url">{link.short}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shortener;
