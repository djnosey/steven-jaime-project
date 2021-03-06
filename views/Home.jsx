const React = require("react");
const ProductCard = require("./components/ProductCard");
const Layout = require("./Layout");
const CategoryBar = require("./components/CategoryBar");

function Home(props) {
  const products = props.allProducts;
  return (
    <Layout title="Home Page">
      <CategoryBar />
      {props.nothingFound ? (
        <div className="nothingFoundContainer">
          <i id="nothingFoundIcon" class="far fa-meh"></i>
          <h3>Sorry! No results matched that search</h3>
        </div>
      ) : null}
      <h4 id="home-text">Check out some of our awesome products to trade!</h4>
      <div className="columnContainer">
        <div className="mainHomeContainer">
          {products.map((product, index) => {
            if (index % 2 == 0) {
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
            }
          })}
        </div>
        <div className="mainHomeContainer2">
          {products.map((product, index) => {
            if (index % 2 != 0) {
              return (
                <ProductCard
                  key={product._id}
                  image={product.image}
                  title={product.name}
                  condition={product.condition}
                  category={product.category}
                  id={product._id}
                />
              );
            }
          })}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;
