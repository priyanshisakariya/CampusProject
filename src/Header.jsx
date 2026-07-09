import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>CampusProject</h2>
      </div>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
      </nav>

      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </header>
  );
}

export default Header;