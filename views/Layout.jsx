const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "My App"} </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
      <nav id="navbarContainer">
        <img src="" alt=""/>
        <input type="text"/>
      </nav>
      {props.children}
      </body>
    </html>
  );
}

module.exports = Layout;
