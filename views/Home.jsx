const React = require("react");
const CategoryBar = require("./components/CategoryBar");
const ProductCard = require("./components/ProductCard");
const Layout = require("./Layout");
const HtmlLayout = require("./HtmlLayout");

function Home(props) {
  const products = props.allProducts;
  return (
    <HtmlLayout>
      {props.nothingFound ? (
        <div className="nothingFoundContainer">
          <h3>sorry no results matched that search</h3>
          <i id="nothingFoundIcon" class="far fa-meh"></i>
        </div>
      ) : null}
      <h4>Check out some of our awesome products to trade</h4>
      <div className="mainHomeContainer">
        {products.map((product) => {
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
        })}
      </div>
    </HtmlLayout>
  );
}

module.exports = Home;
