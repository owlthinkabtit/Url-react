function LinkCard({link, index, copyIndex, onCopy}) {
  return (
    <div className="link-card">
      <span className="long-url">{link.long}</span>
      <div className="link-right">
        <span className="short-url">{link.short}</span>
        <button
          className={`btn-copy ${copyIndex === index ? "copied" : ""}`}
          onClick={() => onCopy(link.short, index)}
        >
          {copyIndex === index ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default LinkCard;