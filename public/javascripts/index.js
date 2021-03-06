// window.addEventListener("load", (event) => {
//   console.log("hello from javascript!");
// });

// Remove a game from the users 'Played' or 'Want to Play' games list
// both operations occur in 1 function because they are dependant on eachother
// (a game can only be in played or want to play)

const buttons = document.querySelectorAll(".remove-game-btn");
for (let i = 0; i < buttons.length; i++) {
  const btn = buttons[i];
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const gameId = e.target.value;
    const userId = e.target.id;

    const body = { user_id: userId, game_id: gameId}
    const res = await fetch(`/users/${userId}/userProfile`, {
      headers: { "Content-Type": "application/json"},
        method: "DELETE",
      body: JSON.stringify(body),
    });
    const data = await res.json();

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



/*======================Dynamic Search======================*/

const dbRequester = () => {
    let clickCount = 0;

    const searchIcon = document.getElementById('search-icon');
    searchIcon.addEventListener('click', () => {
        const genres = ['arcade', 'adventure', 'rpg', 'fps', 'sports', 'indie'];
        const listAmount = 6;
        const ul = document.querySelector('nav > ul');



        if (!clickCount) {
          const form = document.createElement('form');
          const textbox = document.createElement('input');
          const searchUL = document.createElement('ul');

            for(let i = 0; i < listAmount; i++) {
              const searchLI = document.createElement('li');
              const searchButton = document.createElement('button');

              searchLI.className = 'searchLIs';
              searchLI.id = `searchLI-${i}`;
              searchButton.type = 'button';
              searchButton.className = 'allSearchButtons';
              searchButton.innerText = `${genres[i][0].toUpperCase()}${genres[i].slice(1)}`;

              searchButton.addEventListener('click', function() {
                window.location = `${window.origin}/games/${genres[i]}`;
              });

              searchUL.appendChild(searchButton);
              searchUL.appendChild(searchLI);
            }

            form.autocomplete = 'off';
            form.action = `/games/searchPage`;
            form.id = 'searchForm';

            textbox.id = 'searchTextbox';
            textbox.name = 'term';
            textbox.addEventListener('input', function() {
              textbox.value = this.value;
            });


            searchUL.id = 'searchUL';

            form.appendChild(textbox);
            form.appendChild(searchUL);
            ul.appendChild(form);

            clickCount++;

        } else {
            const form = document.getElementById('searchForm');
            ul.removeChild(form)
            clickCount--;
          }

    })
}

dbRequester();





//! REDACTED
// Function adds functionality to users profile page.
// adds buttons that allows user to delete
// reviews that they made previously.
// const reviewButtons = document.querySelectorAll(".remove-review-btn");
// // loop through all remove-review-btn's
// for (let i = 0; i < reviewButtons.length; i++) {
//   const btn = reviewButtons[i];
//   btn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const userId = e.target.id;
//     const reviewId = e.target.value;
//     // console.log(userId);
//     const body = { user_id: userId, reviewId: reviewId}
//     // will call a DELETE method on the review associated with the button
//     const res = await fetch(`/users/${userId}/review`, {
//       headers: { "Content-Type": "application/json"},
//         method: "DELETE",
//       body: JSON.stringify(body),
//     });
//     const data = await res.json();
//     // console.log(res);
//     // console.log(data.message);
//     if (data.message === "Successful") {
//       console.log("Success");
//       const container = document.querySelector(
//       `#review-container-${reviewId}`
//       );
//     //   console.log(container);
//       container.remove();
//     } else {
//       console.log("Wut Happened w my review removal?");
//     }
//   });
// }

//event listener to make played wtp buttons change on click
const playedBtn = document.querySelectorAll(".game-stat-btn-played")
const wtpBtn = document.querySelectorAll(".game-stat-btn-wtp")
//for played btn
for(let i = 0; i < playedBtn.length; i++){
  const btn = playedBtn[i]
  btn.addEventListener("click", (e) => {
      if (wtpBtn[i].style.color === "var(--play-btn-clicked)") {
        wtpBtn[i].style.color = "var(--play-btn-unclicked)";
        btn.style.color = "var(--play-btn-clicked)";
      } else {
        btn.style.color = "var(--play-btn-clicked)";
      }
  })
}
//for wtp button
for(let i = 0; i < wtpBtn.length; i++){
  const btn = wtpBtn[i]
  btn.addEventListener("click", (e)=>{
      if(playedBtn[i].style.color === "var(--play-btn-clicked)"){
        playedBtn[i].style.color = "var(--play-btn-unclicked)"
        btn.style.color = "var(--play-btn-clicked)";
      }else{
        btn.style.color = "var(--play-btn-clicked)";
      }
})
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
// const newReviewButton = document.getElementById("submit-review");
//   newReviewButton.addEventListener('click', async(event)=>{
//   const reviewContainer = document.querySelector('.review-container');

//   const newReviewText = document.getElementById('review-textbox');
//   const newCommentEle = document.createElement("p",'.comment');
//   newCommentEle.classList.add('comment');
//   newCommentEle.innerText = newReviewText.value;
//   reviewContainer.appendChild(newCommentEle);
//   // setTimeout(()=>{
  //   newReviewText.value = "";
  // }, 0);
// });
