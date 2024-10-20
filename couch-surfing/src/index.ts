import "./index.css";
import { sortByMostRecent, showTotal, populateUser } from "./utils";

// // Number Types mini-challenge 10 10.2
// // Write a function that will only accept numbers and attend to
// // all TypeScript weakness flags.
// // : number

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
const sortedReviews = sortByMostRecent(reviews);

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

populateUser(you.isReturning, you.firstName);
