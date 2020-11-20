const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Home(props) {
  return (
    <Layout title="Home Page">
      <div>
        <h1>{props.allproducts[0].name}</h1>
        <h3>{props.allproducts[0].description}</h3>
        <img src={props.allproducts[0].image} alt="" />
      </div>
    </Layout>
  );
}

module.exports = Home;
