// document.querySelector("button").addEventListener("click",function ()//anonymous function
// {
//     alert("I Got Clicked");
// });
var drum = document.querySelectorAll(".drum");
for (var index = 0; index <= drum.length; index++) {

document.querySelectorAll("button")[index].addEventListener("click",function ()
{
     var buttonHTML = this.innerHTML;
  switch (buttonHTML) {
     case "Sa":
          var tom_1 = new Audio("Music/tom-1.mp3");
          tom_1.play();
     break;
     case "Re":
          var tom_2 = new Audio("Music/tom-2.mp3");
          tom_2.play();
     break;
     case "Ga":
          var tom_3 = new Audio("Music/tom-3.mp3");
          tom_3.play();
     break;
     case "Ma":
          var tom_4 = new Audio("Music/tom-4.mp3");
          tom_4.play();
     break;
     case "Pa":
          var Snare = new Audio("Music/snare.mp3");
          Snare.play();
     break;
     case "Da":
          var crash = new Audio("Music/crash.mp3");
          crash.play();
     break;
     case "Ni":
          var Kick = new Audio("Music/kick-bass.mp3");
          Kick.play();
     break;
       default:
            break;
  }
});

}
