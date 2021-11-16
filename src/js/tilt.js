import tilt from "tilt.js";

export default function initTilt() {
  $(".js-tilt").tilt({
    maxTilt: 3,
  });
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}