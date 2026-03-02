function NavBar() {
  return (
    <header className="container">
      <nav className="nav_wrapper">
        <div className="nav_left">
          <a href="/">
            <img className="logo" src="./assets/" alt="Shortly Logo" />
          </a>
          <ul className="nav_links">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div className="login">
          <button className="btn-login">Login</button>
          <button className="btn-cyan">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
