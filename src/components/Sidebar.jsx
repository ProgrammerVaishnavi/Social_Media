const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px", height: "100vh" }}
    >
      {/* Logo / Title */}
      <a
        href="/"
        className="d-flex align-items-center mb-3 text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>

      <hr />

      {/* Navigation */}
      <ul className="nav nav-pills flex-column mb-auto">
        {/* Home */}
        <li className="nav-item">
          <button
            className={`nav-link text-white ${
              selectedTab === "Home" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("Home")}
            style={{ border: "none", background: "none", textAlign: "left" }}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </button>
        </li>

        {/* Create Post */}
        <li className="nav-item">
          <button
            className={`nav-link text-white ${
              selectedTab === "Create Post" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("Create Post")}
            style={{ border: "none", background: "none", textAlign: "left" }}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </button>
        </li>
      </ul>

      <hr />

      {/* Profile Dropdown */}
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img
            src="https://github.com/mdo.png"
            alt="profile"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>User</strong>
        </a>

        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
