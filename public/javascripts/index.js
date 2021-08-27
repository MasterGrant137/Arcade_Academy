// window.addEventListener("load", (event) => {
//   console.log("hello from javascript!");
// });

// Remove a game from the users 'Played' or 'Want to Play' games list
// both operations occur in 1 function because they are dependant on eachother
// (a game can only be in played or want to play)
const buttons = document.querySelectorAll(".remove-game-btn");
// console.log(buttons)
for (let i = 0; i < buttons.length; i++) {
  const btn = buttons[i];
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const gameId = e.target.value;
    const userId = e.target.id;
    // console.log(userId);
    const body = { user_id: userId, game_id: gameId}
    const res = await fetch(`/users/${userId}/userProfile`, {
      headers: { "Content-Type": "application/json"},
        method: "DELETE",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    // console.log(res);
    // console.log(data.message);
    if (data.message === "Successful") {
      console.log("Success");
      const container = document.querySelector(
        `#game-preview-containers-${gameId}`
      );
    // console.log(container);
      container.remove();
    } else {
      console.log("Wut Happened");
    }
  });
}

// Function adds functionality to users profile page.
// adds buttons that allows user to delete
// reviews that they made previously. 
const reviewButtons = document.querySelectorAll(".remove-review-btn");
// loop through all remove-review-btn's
for (let i = 0; i < reviewButtons.length; i++) {
  const btn = reviewButtons[i];
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const userId = e.target.id;
    const reviewId = e.target.value;
    // console.log(userId);
    const body = { user_id: userId, reviewId: reviewId}
    // will call a DELETE method on the review associated with the button
    const res = await fetch(`/users/${userId}/review`, {
      headers: { "Content-Type": "application/json"},
        method: "DELETE",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    // console.log(res);
    // console.log(data.message);
    if (data.message === "Successful") {
      console.log("Success");
      const container = document.querySelector(
      `#review-container-${reviewId}`
      );
    //   console.log(container);
      container.remove();
    } else {
      console.log("Wut Happened w my review removal?");
    }
  });
}

// new comment simulator
// when a user submits a review, their review is added to the database
// but does not add onto the page without a refresh.
// this code simulates the adding of the comment with the same text.
// on refresh, this segment dissapears, and the actual comment is rendered
// from the database. 
const newReviewButton = document.getElementById("submit-review");
  newReviewButton.addEventListener('click', async(event)=>{
  const reviewContainer = document.querySelector('.review-container');
  
  const newReviewText = document.getElementById('review-textbox');
  const newCommentEle = document.createElement("p",'.comment');
  newCommentEle.classList.add('comment');
  newCommentEle.innerText = newReviewText.value;
  reviewContainer.appendChild(newCommentEle);
  // setTimeout(()=>{
  //   newReviewText.value = "";
  // }, 0);
});