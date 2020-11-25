# We Trade!

## Description

Who hasn't accumulate things that you don't use anymore? Wouldn't it be great that you can trade them for other things you need? Here is where We Trade! comes to the rescue! Share your tradable products and search for the things you need. Don't spend money, just trade!

## User Stories

- **Homepage** - As a user I want to be able to browse products people are willing to trade and find options to sign up or login, also browse products sorted by category. As an authorized user I want to be able to favorite products from the homepage.
- **Product View** - As a user I want to be able to view more details about the product. And as an authorized user, make an offer to trade it and if it is my product, be able to delete it.
- **Private-Profile View** - As an authorised user I want to be able to see my items I have currently listed to trade. Also I want to see offers from other users to trade their products and edit my profile.
- **Edit Private-Profile View** - As a user I want to be able to edit my profile name, image and phone number.
- **Create Product View** - As a user I want to be able to upload my items to trade.
- **Trade View** - As a user I want to be able to choose what product to trade, select my own product to offer as a trade and know if the trade was successful.
- **Sign up View** - As a user I want to be able to create a user profile.
- **Log In View** - As a user I want to be able to login to my account, and be redirected to home view to look for some products.

## Routes

### Home Routes

| **Method** | **Route** | **Description** |
| ---------- | --------- | --------------- |
| `GET`      | `/`       | Home page view  |

### Auth Routes

| **Method** | **Route** | **Description**                |
| ---------- | --------- | ------------------------------ |
| `GET`      | `/signup` | Signup view                    |
| `POST`     | `/signup` | Recieve sign form information  |
| `GET`      | `/login`  | Login view                     |
| `POST`     | `/login`  | Recieve login form information |
| `GET`      | `/logout` | Logout user's session          |

### Product Routes

| **Method** | **Route**                    | **Description**                                   |
| ---------- | ---------------------------- | ------------------------------------------------- |
| `GET`      | `/createproduct`             | Create new product view                           |
| `POST`     | `/addproduct/:userId`        | Recieve information for adding a new product form |
| `GET`      | `/productdetails/:productId` | Product details view                              |
| `POST`     | `/delete/:productId`         | Delete product                                    |

### Search Routes

| **Method** | **Route**         | **Description**                           |
| ---------- | ----------------- | ----------------------------------------- |
| `GET`      | `/searchitem`     | Search bar renders the resulting products |
| `GET`      | `/searchcategory` | Category bar resulting products           |

### Transactions Routes

| **Method** | **Route**               | **Description**                                          |
| ---------- | ----------------------- | -------------------------------------------------------- |
| `GET`      | `/tradeView/:productId` | Choose your product to trade view                        |
| `POST`     | `/tradeView/:productId` | Recieve the information form the trade view              |
| `POST`     | `/viewrequests`         | View where you can see your trade offer requests         |
| `POST`     | `/tradeRejected`        | Reject the offer                                         |
| `POST`     | `/tradeDone`            | Trade successful view with ther user contact information |

### User Routes

| **Method** | **Route**             | **Description**                                    |
| ---------- | --------------------- | -------------------------------------------------- |
| `GET`      | `/profile`            | User's profile view                                |
| `GET`      | `/editprofile`        | User's edit profile view                           |
| `POST`     | `/editprofile`        | Revieve the information form the edit profile form |
| `POST`     | `/delete`             | Render delete confirmation profile view            |
| `POST`     | `/deleteConfirmation` | Delete profile confirmation                        |

## Models

### User Model

```
{
    username: { type: String, unique: true },
    password: { type: String },
    email: {type: String},
    phone: {type: Number},
    image: { type: String },
    transactions: [
      {
        productRequested: { type: Schema.Types.ObjectId, ref: "Product" },
        productOffer: { type: Schema.Types.ObjectId, ref: "Product" },
        approved: Boolean
      }
    ],
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    requests: [
      {
        productRequested: { type: Schema.Types.ObjectId, ref: "Product" },
        productOffer: { type: Schema.Types.ObjectId, ref: "Product" }
      }
    ],
}
```

### Product Model

```
  {
    name: { type: String },
    category: {
      type: String,
      enum: [
        "Electronics",
        "Vehicles",
        "Baby",
        "Home",
        "Hobbies",
        "Clothing",
        "Sports",
        "Outdoor",
        "Christmas",
      ],
    },
    description: { type: String },
    image: String,
    condition: {
      type: String,
      enum: ["New", "Used", "Nearly new", "Broken/for parts"],
    },
    seller: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
```

## Backlogs

- See featured items at the top of the home page
- Inbox for messages
- See my trade history
- Edit Product View to edit the products that I uploaded
- Have a chat platform to communicate with other traders
- Location services to see which products are close to me
- Select personal interest in my profile to be matched with items that I may like
- User can select favorite items and review other users
- Implement a value category to products
- Change user's password in edit profile
- Repeat password validation
- Popup message when deleting a profile

## Links

#### Git

​ [Repository Link](https://github.com/djnosey/steven-jaime-project)

​ [Deploy Link](https://trade-up-app.herokuapp.com)

#### Trello

​ [Our Trello board](https://trello.com/b/PDgAjzMS/trade-app)

#### Slides

​ [Our presentation](
