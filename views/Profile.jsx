const React = require("react");
const Layout = require("./Layout");
const ProductCard = require("./components/ProductCard");

function Profile(props) {
  const requests = props.myProducts[0].seller.requests;
  console.log("kdfuhkfjdhvkjhjvdk", requests[0].productOffer);

  return (
    <Layout>
      <div className="mainProfileDiv">
        <h1>{props.actualUser.username}</h1>
        {requests.length == 0 ? null : (
          <div>
            <h3>you have new trade requests</h3>
            <form
              action={`/transaction/viewrequests?proposedproduct=${requests[0].productOffer}&yourproduct=${requests[0].productRequested}`}
              method="POST"
            >
              <button>view requests</button>
            </form>
          </div>
        )}
        <img src={props.actualUser.image} />
        <form action="/user/editprofile">
          <button className="formButton">Edit profile</button>
        </form>
        <form action="/auth/logout">
          <button className="formButton">logout</button>
        </form>
        <h3>your currently listed items</h3>
        <div className="yourItems">
          {props.myProducts.map((product, index) => {
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
