const React = require("react");
const Layout = require("./Layout");
const ProductCard = require("./components/ProductCard");

function Profile(props) {
  console.log(props);

  if (!props.myProducts || props.myProducts.length == 0) {
    var requests = [];
  } else {
    requests = props.myProducts[0].seller.requests;
  }

  return (
    <Layout>
      <div className="mainProfileDiv">
        <section className="profile-info-container">
          <div className="profile-info">
            <img className="sellerimg" src={props.actualUser.image} />
            <div className="profile-info-detail">
              <h2>{props.actualUser.username}</h2>
              <p>{props.actualUser.email}</p>
              <p>Phone: {props.actualUser.phone}</p>
            </div>
          </div>
          <div className="profile-buttons">
            <form action="/user/editprofile">
              <button className="formButton">Edit profile</button>
            </form>
            <form action="/auth/logout">
              <button id="logout-button" className="formButton">
                Logout
              </button>
            </form>
          </div>
        </section>

        {requests.length == 0 ? null : (
          <div className="profile-alert-container">
            <h4>You have new trade request!</h4>
            <form
              action={`/transaction/viewrequests?proposedproduct=${requests[0].productOffer}&yourproduct=${requests[0].productRequested}`}
              method="POST"
            >
              <button className="formButton">View request</button>
            </form>
          </div>
        )}
        <h3>Your currently listed items</h3>
        <div className="yourItems">
          {!props.myProducts
            ? null
            : props.myProducts.map((product, index) => {
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
