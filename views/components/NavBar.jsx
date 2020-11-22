const React = require("react");

function NavBar() {
  return (
    <div className="menunav">
      <nav id="navbarContainer">
        <i id="hamburgerIcon" className="fas fa-ellipsis-v closed"></i>
        <div id="searchContainer">
          <form action="/search/searchitem" name="searchString" method="GET">
            <input
              placeholder="search items..."
              id="searchInput"
              type="text"
              name="searchStr"
            />
            <button type="submit" id="searchBarButton"></button>
          </form>
        </div>
      </nav>
      <div className="menu closed">
        <ul className="menuList closed">
          <li className="menulist">Home</li>
          <li className="menulist">Your Profile</li>
          <li className="menulist">List a trade offer</li>
          <li className="menulist">Sign Up</li>
          <li className="menulist">Log in</li>
          <li className="menulist"></li>
          <li className="menulist"></li>
          <li className="menulist"></li>
          <li className=" menulist lastInList">Logout</li>
        </ul>
      </div>
    </div>
  );
}

module.exports = NavBar;
