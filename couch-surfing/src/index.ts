import "./index.css";
import {
  sortByMostRecent,
  showTotal,
  populateUser,
  showDetails,
  getTopTwoReviews,
} from "./utils";
import { Permissions, LoyaltyUser } from "./enums";
import { Price, Country } from "./types";
import { Review, Property } from "./interfaces";
import MainProperty from "./classes";

const propertyContainer = document.querySelector(".properties")!;
const footer = document.querySelector(".footer")!;
const container = document.querySelector(".container")!;
const button = document.querySelector("button")!;
const reviewContainer = document.querySelector(".reviews")!;

let isLoggedIn: boolean;

const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];
const sortedReviews = sortByMostRecent(reviews);

showTotal(reviews.length, sortedReviews[0].name, sortedReviews[0].loyaltyUser);

const you = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

const properties: Property[] = [
  {
    image: "/images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+1123495082908, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "/images/poland-property.jpg",
    title: "Polish Cottage",
    price: 34,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: [+1123495082908, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "/images/london-property.jpg",
    title: "London Flat",
    price: 23,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: 35433,
      country: "United Kingdom",
    },
    contact: [+1123495082908, "andyluger@aol.com"],
    isAvailable: true,
  },
  {
    image: "/images/malaysian-hotel.jpeg",
    title: "Malia Hotel",
    price: 35,
    location: {
      firstLine: "Room 4",
      city: "Malia",
      code: 45334,
      country: "Malaysia",
    },
    contact: [+60349822083, "lee34@gmail.com"],
    isAvailable: false,
  },
];

populateUser(you.isReturning, you.firstName);

let authorityStatus: any;

isLoggedIn = true;

for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);
  propertyContainer.appendChild(card);
  showDetails(isLoggedIn, card, properties[i].price);
}

let count = 0;
function addReviews(
  array: {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
  }[]
): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
      reviewContainer.appendChild(card);
    }
    container.removeChild(button);
  }
}

button.addEventListener("click", () => addReviews(reviews));
let currentLocation: [string, string, number] = ["London", "11:35", 17];
footer.innerHTML =
  currentLocation[0] +
  " " +
  currentLocation[1] +
  " " +
  currentLocation[2] +
  "°";

let yourMainProperty = new MainProperty(
  "images/italian-property.jpg",
  "Italian House",
  [
    {
      name: "Olive",
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: "12-04-2021",
    },
  ]
);

const mainImageContainer = document.querySelector(".main-image")!;
const image = document.createElement("img");
image.setAttribute("src", yourMainProperty.src);
mainImageContainer.appendChild(image);
