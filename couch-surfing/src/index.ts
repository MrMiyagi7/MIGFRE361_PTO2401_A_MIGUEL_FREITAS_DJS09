import "./index.css";

// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector("#reviews")!;

const reviews = [
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

function showTotal(reviewsTotal: number, reviewName: String) {
  reviewTotalDisplay.innerHTML =
    "Total number of reviews " +
    reviewsTotal.toString() +
    "| Last reviewed by  " +
    reviewName;
}

showTotal(reviews.length, sortedReviews[0].name);
