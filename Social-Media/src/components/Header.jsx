const Header = () => {
  return (
    <header className="my-header">
      <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
        {/* Logo */}
        <a
          href="/"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        {/* Nav */}
        <ul className="nav me-auto ms-3">
          <li>
            <a href="#" className="nav-link px-2 text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              About
            </a>
          </li>
        </ul>

        {/* Search */}
        <form className="d-flex me-3" role="search">
          <input type="search" className="form-control" placeholder="Search" />
        </form>

        {/* Buttons */}
        <div>
          <button className="btn btn-outline-light me-2">Login</button>
          <button className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
