const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "My App"} </title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        />

        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
        <nav id="navbarContainer">
          <i id="hamburgerIcon" class="fas fa-ellipsis-v"></i>
          <div id="searchContainer">
            <form action="">
              <input
                placeholder="search items..."
                id="searchInput"
                type="text"
              />
              <button id="searchBarButton"></button>
            </form>
          </div>
        </nav>
        {props.children}
      </body>
    </html>
  );
}

module.exports = Layout;
