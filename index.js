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


//i do that i add evenlistner to all button using for loop
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  //this object evenlistner is check for click ,when click occure then anonlyu
  //mous function callled
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // console.log(this);
    // this.style.color="white";
    var buttonInnerHTML = this.innerHTML;//it carry the letter inside that element
    // console.log(buttonInnerHTML);
    sound(buttonInnerHTML);//passing letter to sound function 
    buttonAnimation(buttonInnerHTML);

  });
}

//this is another type of addeventlistner which detect the key you pressed 
// and  send to sound and buttonanimatir function 
document.addEventListener("keypress", function (event) {
  sound(event.key);
  buttonAnimation(event.key);

});


//this function is cause of sound
function sound(key)
{
  switch (key) {
    case 'w':
      var crash = new Audio("sounds/crash.mp3");//object crash is created
      crash.play();//crash called method which is play
      break;
    case 'a':
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;
    case 's':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("wrong button clicked");//occur if right button not pressed
  }
}


function buttonAnimation(currentKey)
{
   var activeButton=document.querySelector("."+currentKey);//way to passing classname
  activeButton.classList.add("pressed");//presssed class is added to .currentkey class
  setTimeout(function(){//time delay function whcih take anonumous function and time in ms
    activeButton.classList.remove("pressed");//class name pressed is removed from element which already class name .currentkey
  },100);
  
}