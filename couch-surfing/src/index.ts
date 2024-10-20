import "./index.css";

// // Number Types mini-challenge 10 10.2
// // Write a function that will only accept numbers and attend to
// // all TypeScript weakness flags.
// // : number
const reviewTotalDisplay = document.querySelector("#reviews")!;

const returningUserDisplay = document.querySelector("#returning-user")!;
const userNameDisplay = document.querySelector("#user")!;

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

function sortByMostRecent(
  reviews: { name: string; stars: number; loyaltyUser: boolean; date: string }[]
) {
  return reviews.sort((a, b) => {
    // Convert the date strings to Date objects for comparison
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB.getTime() - dateA.getTime(); // Sort in descending order (most recent first)
  });
}
const sortedReviews = sortByMostRecent(reviews);

function showTotal(
  reviewsTotal: number,
  reviewName: String,
  isLoyalty: boolean
) {
  const iconDisplay = isLoyalty ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    "Total number of reviews " +
    reviewsTotal.toString() +
    "| Last reviewed by  " +
    reviewName +
    iconDisplay;
}

showTotal(reviews.length, sortedReviews[0].name, sortedReviews[0].loyaltyUser);

const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: "Bobby",
  lastName: "Brown",
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

function populateUser(isReturning: boolean, userName: string) {
  if (isReturning === true) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

populateUser(you.isReturning, you.userName);
