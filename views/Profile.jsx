const React = require("react");
const Layout = require("./Layout");
const ProductCard = require("./components/ProductCard");

function Profile(props) {
  return (
    <Layout>
      <div className="mainProfileDiv">
        <h1>{props.actualUser.username}</h1>
        <img src={props.actualUser.image} />
        <button
          className="formButton"
          onClick="location.href='/user/editprofile'"
        >
          Edit profile
        </button>
        <a className="formButton" href="/auth/logout">
          Logout
        </a>
        <h3>your currently listed items</h3>
        <div className="yourItems">
          {props.products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                image={product.image}
                title={product.name}
                condition={product.condition}
                category={product.category}
                id={product._id}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Profile;
