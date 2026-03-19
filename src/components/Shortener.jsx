import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";

function Shortener() {
  const [input, setInput] = useState("");
  const [links, setLinks] = useState(() => {
    const saved = localStorage.getItem("shortenedLinks");
    return saved ? JSON.parse(saved) : [];
  });
  const [copyIndex, setCopyIndex] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(links));
  }, [links]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input) {
      setError(true);
      return;
    }
    setError(false);
    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (url, index) => {
    navigator.clipboard.writeText(url);
    setCopyIndex(index);
    setTimeout(() => setCopyIndex(null), 2000);
  };

  return (
    <section id="shorten-area">
      <div className="container">
        <div className="shorten_container">
          <form className="shorten-form" onSubmit={handleSubmit}>
            <div className={`input-control ${error ? "error" : ""}`}>
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                  if (event.target.value) setError(false);
                }}
              />
              <span className="error-msg">Please add a link</span>
            </div>
            <button type="submit" className="btn-cyan" disabled={isLoading}>
              {isLoading ? "Shortening..." : "Shorten It!"}
            </button>
          </form>
        </div>
        {links.map((link, index) => (
          <LinkCard
            key={index}
            link={link}
            index={index}
            copyIndex={copyIndex}
            onCopy={handleCopy}
          />
        ))}
      </div>
    </section>
  );
}

export default Shortener;
