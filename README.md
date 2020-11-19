# We Trade!

## Description

Who hasn't accumulate things that you don't use anymore? Wouldn't it be great that you can trade them for other things you need? Here is where We Trade! comes to the rescue! Share your tradable products and search for the things you need. Don't spend money, just trade!

## User Stories

- **404** - As users, we want to be politely warned that this page does not exist and it was our fault to search for it. ⚠️
- **500** - As users, we want to be politely warned that the amazing team behind the project screwd it up and it's not our fault.
- **Homepage** - As a user I want to be able to browse products people are willing to trade and find options to sign up or login, also browse products sorted by category. As an authorized user I want to be able to favorite products from the homepage.
- **Product View** - As a user I want to be able to view more details about the product. And as an authorized user, favorite it or make an offer to trade it.
- **Private-Profile View** - As an authorised user I want to be able to see my favorited items and delete them, and see the items I have currently listed to trade and delete them. Also I want to see offers from other users to trade their products.
- **Edit Private-Profile View** - As a user I want to be able to edit my profile.
- **Public-Profile View** - As a user I want to be able to see details about the user and the products they are offering to trade.
- **Create Product View** - as a user I want to be able to upload my items to trade.
- **Sign up View** - As a user I want to be able to create a user profile,
- **Log In View** - As a user I want to be able to login to my account, and be redirected to home view to look for some products.
- Success view -

## Routes

| **Method** | **Route**                    | **Description**                     | **Request - Body**                          |
| ---------- | ---------------------------- | ----------------------------------- | ------------------------------------------- |
| `GET`      | `/`                          | Home page view                      | {req.body - name, image, \_id, seller \_id} |
| `PUT`      | `/user/:currentuser`         | Select favorite items               | {productId} backlog                         |
| `GET`      | `product/:productId`         | Product Detail View                 |                                             |
| `GET`      | `/user/userid/`              | See someone else profile view       |                                             |
| `PUT`      | `/user/currentuser`          | Favoriting products                 | {add product currentUser favorites array}   |
| `PUT`      | `/user/sellersId`            | For proposing trade                 | {product id, sellers id, buyer id}          |
| `GET`      | `/user/currentuser`          | Display users page view (protected) |                                             |
| `POST`     | `/product/:productId/delete` | Delete product button (protected)   |                                             |
|            |                              |                                     |                                             |
| `GET`      | `/auth/logout`               | Log out from your session           | {req.session.destroy} => res.redirect("/")  |
| `GET`      | `/user/editprofile`          | Edit user profile view              |                                             |
| `POST`     | `/user/editprofile`          | Edit user profile details           |                                             |
| `POST`     | `/user/editeprofile/delete`  | Delete profile                      |                                             |
|            |                              |                                     |                                             |
| `GET`      | `/product/addproduct`        | Create product view (protected)     |                                             |
| `POST`     | `/product`                   | Create new product                  |                                             |
| `GET`      | `/auth/signup`               | Sign up view                        |                                             |
| `POST`     | `auth/signup`                | Send sign up form                   |                                             |
| `GET`      | `/auth/login`                | Login up view                       |                                             |
| `POST`     | `auth/login`                 | Send login form                     |                                             |
| `GET`      | `/success`                   | Success trade view                  |                                             |

## Models

### User Model

```
{
    username: { type: String, unique: true },
    password: { type: String },
    image: { type: String },
    transactions: [
      { productRequested: { type: Schema.Types.ObjectId, ref: "Product" } },
      { productOffer: { type: Schema.Types.ObjectId, ref: "Product" } },
      { approved: Boolean },
    ],
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    requests: [
      { productRequested: { type: Schema.Types.ObjectId, ref: "Product" } },
      { productOffer: { type: Schema.Types.ObjectId, ref: "Product" } },
      { approved: { type: Boolean } },
    ],
}
```

### Product Model

```
{
    name: { type: String },
    category: { type: String },
    description: { type: String },
    image: String,
    condition: { type: Number },
    seller: [{ type: Schema.Types.ObjectId, ref: "User" }],
}
```

## Backlogs

- See featured items at the top of the home page
- Inbox for messages
- See my trade history
- Edit Product View to edit the products that I uploaded
- Have a chat platform to communicate with other traders
- Location services to see which products are close to me
- Select personal interest in my profile to be matched with items that I may like
- User can select favorite items adn review other users
- Add location
- Implement a value category to products

## Links

#### Git

​ [Repository Link]()

​ [Deploy Link]()

#### Trello

​ [Our Trello board](https://trello.com/b/PDgAjzMS/trade-app)

#### Slides

​ [Our presentation](
