const React = require("react");

function ProductCard(props) {
  return (
    <div className="contentCardContainer">
      <a href={`/product/productdetails/${props.id}`}>
        <div className="imageContainer">
          <img src={props.image} alt="" />
        </div>
        <div className="textContainer">
          <div className="textContainerTop">
            <p className="productCardTitle">{props.title}</p>
          </div>
          <div className="textContainerBottom">
            <p className="productCardCondition">{props.condition}</p>
            <p className="productCardCategory">{props.category}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

module.exports = ProductCard;
