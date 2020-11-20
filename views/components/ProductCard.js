const React = require("react");

function ProductCard(props) {
  return (
    <div className="contentCardContainer">
      <div className="imageContainer">
        <img
          src="https://www.dhresource.com/0x0/f2/albu/g10/M00/39/89/rBVaWVywZEyAAwnmAAHavpE9xMU547.jpg"
          alt=""
        />
      </div>
      <div className="textContainer">
        <div className="textContainerTop">
          <p className="productCardTitle">rubber duck</p>
        </div>
        <div className="textContainerBottom">
          <p className="productCardCondition">nearly new</p>
          <p className="productCardCategory">electronics</p>
        </div>
      </div>
    </div>
  );
}

module.exports = ProductCard;
