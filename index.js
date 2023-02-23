// alert("done");

//add eventlistner to js
//step 1
// document.querySelector("button").addEventListener("click",handleClick);
/**
 if you use handleClick() instead of handleClick then handleClick() direct
 ly called even without clicked.
 */

// function handleClick()
// {
//   alert("clicked");
// }

//other step using anonymous function
// document.querySelector("button").addEventListener("click",function(){
//   alert("clicked");
// });
// document.querySelectorAll("button")[2].addEventListener("click",function(){
//   alert("all clicked");
// });

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var audio = new Audio("sounds/tom-1.mp3");
audio.play();

  });
}