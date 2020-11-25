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
      <div className="menu closed ">
        <ul className="menuList ">
          <a href="/">
            <li className="menulist">Home</li>
          </a>
          <a href="/user/profile">
            <li className="menulist">Your Profile</li>
          </a>
          <a href="/product/createproduct">
            <li className="menulist">List a trade offer</li>
          </a>
          <a href="/auth/signup">
            <li className="menulist">Sign Up</li>
          </a>
          <a href="/auth/login">
            <li className="menulist">Log in</li>
          </a>

          <a href="/auth/logout">
            <li className=" menulist lastInList">Logout</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

module.exports = NavBar;
