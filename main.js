// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {

//const heart = document.getElementsByClassName("like-glyph")

const hearts = document.querySelectorAll("span.like-glyph")
console.log(hearts)
// const heart = commentLine.querySelectorAll("span")
// console.log(heart)

hearts.addEventListener("click", fillHeart) 
function fillHeart (hearts) {
  if (hearts === EMPTY_HEART) {
    hearts.innerText = FULL_HEART
  }
  if (hearts === FULL_HEART) {
    hearts.innerText = EMPTY_HEART
  }
}
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
