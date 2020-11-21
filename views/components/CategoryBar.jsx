const React = require("react");

function CategoryBar() {
  return (
    <div className="categoryContainer">
      <div className="categorySelection">
        <i className="fas fa-tshirt categoryIcon"></i>
        <p className="categoryText">Clothing</p>
      </div>
      <div className="categorySelection">
        <i class="fas fa-desktop categoryIcon"></i>
        <p className="categoryText">Electronics</p>
      </div>
      <div className="categorySelection">
        <i class="fas fa-home categoryIcon"></i>
        <p className="categoryText">Home</p>
      </div>
      <div className="categorySelection">
        <i class="fas fa-biking categoryIcon"></i>
        <p className="categoryText">Sport equipment</p>
      </div>
      <div className="categorySelection">
        <i class="fas fa-baby-carriage categoryIcon"></i>
        <p className="categoryText">Baby</p>
      </div>
      <div className="categorySelection">
        <i class="fas fa-car categoryIcon"></i>
        <p className="categoryText">Vehicles</p>
      </div>
      <div className="categorySelection">
        <i class="fas fa-campground categoryIcon"></i>
        <p className="categoryText">Outdoor</p>
      </div>
      <div className="categorySelection">
        <i class="fas fa-chess categoryIcon"></i>
        <p className="categoryText">Games & Hobbies</p>
      </div>
      <div className="categorySelection">
        <i class="fas fa-candy-cane categoryIcon highlight"></i>
        <p className="categoryText">Christmas</p>
      </div>
    </div>
  );
}

module.exports = CategoryBar;
