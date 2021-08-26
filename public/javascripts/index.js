// window.addEventListener("load", (event) => {
//   console.log("hello from javascript!");
// });

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
    //   console.log(container);
      container.remove();
    } else {
      console.log("Wut Happened");
    }
  });
}


const reviewButtons = document.querySelectorAll(".remove-review-btn");
// console.log(buttons)
for (let i = 0; i < reviewButtons.length; i++) {
  const btn = reviewButtons[i];
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const userId = e.target.id;
    const reviewId = e.target.value;
    // console.log(userId);
    const body = { user_id: userId, reviewId: reviewId}
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