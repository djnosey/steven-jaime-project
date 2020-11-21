const React = require("react");

function ProductCard(props) {
  console.log(props);
  return (
    <div className="contentCardContainer">
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
    </div>
  );
}

module.exports = ProductCard;
