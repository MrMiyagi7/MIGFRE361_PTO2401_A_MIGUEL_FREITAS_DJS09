const reviewTotalDisplay = document.querySelector("#reviews")!;

const returningUserDisplay = document.querySelector("#returning-user")!;
const userNameDisplay = document.querySelector("#user")!;

export function sortByMostRecent(
  reviews: { name: string; stars: number; loyaltyUser: boolean; date: string }[]
) {
  return reviews.sort((a, b) => {
    // Convert the date strings to Date objects for comparison
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB.getTime() - dateA.getTime(); // Sort in descending order (most recent first)
  });
}

export function showTotal(
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

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning === true) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}
