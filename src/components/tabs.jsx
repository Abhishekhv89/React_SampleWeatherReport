const Tabs = ({ items, selectedTab, handleTabChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {items.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                className={
                  item.name === selectedTab.name
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => {
                  handleTabChange(item);
                }}
                href="#"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Tabs;
