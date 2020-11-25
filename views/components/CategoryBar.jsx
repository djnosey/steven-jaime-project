const React = require("react");

function CategoryBar() {
  return (
    <div className="categoryContainer">
      <div className="categorySelection">
        <a href="/search/searchcategory?querycategory=Clothing">
          <i className="fas fa-tshirt categoryIcon"></i>
          <p className="categoryText">Clothing</p>
        </a>
      </div>
      <div className="categorySelection">
        <a href="/search/searchcategory?querycategory=Electronics">
          <i className="fas fa-desktop categoryIcon"></i>
          <p className="categoryText">Electronics</p>
        </a>
      </div>
      <div className="categorySelection">
        <a href="/search/searchcategory?querycategory=Home">
          <i className="fas fa-home categoryIcon"></i>
          <p className="categoryText">Home</p>
        </a>
      </div>
      <div className="categorySelection">
        <a href="/search/searchcategory?querycategory=Sports">
          <i className="fas fa-biking categoryIcon"></i>
          <p className="categoryText">Sports</p>
        </a>
      </div>
      <div className="categorySelection">
        <a href="/search/searchcategory?querycategory=Baby">
          <i className="fas fa-baby-carriage categoryIcon"></i>
          <p className="categoryText">Baby</p>
        </a>
      </div>
      <div className="categorySelection">
        <a href="/search/searchcategory?querycategory=Vehicles">
          <i className="fas fa-car categoryIcon"></i>
          <p className="categoryText">Vehicles</p>
        </a>
      </div>
      <div className="categorySelection">
        <a href="/search/searchcategory?querycategory=Outdoor">
          <i className="fas fa-campground categoryIcon"></i>
          <p className="categoryText">Outdoor</p>
        </a>
      </div>
      <div className="categorySelection">
        <a href="/search/searchcategory?querycategory=Hobbies">
          <i className="fas fa-chess categoryIcon"></i>
          <p className="categoryText">Hobbies</p>
        </a>
      </div>
      <div className="categorySelection">
        <a href="/search/searchcategory?querycategory=Christmas">
          <i className="fas fa-candy-cane categoryIcon highlight"></i>
          <p className="categoryText">Christmas</p>
        </a>
      </div>
    </div>
  );
}

module.exports = CategoryBar;
