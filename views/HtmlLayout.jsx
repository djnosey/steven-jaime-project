const React = require("react");
const NavBar = require("./components/NavBar");
const CategoryBar = require("./components/CategoryBar");

function HtmlLayout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "My App"} </title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
        <NavBar />
        <div className="barContainer"></div>
        <CategoryBar />
        {props.children}
        <script src="/javascripts/script.js"></script>
      </body>
    </html>
  );
}

module.exports = HtmlLayout;
