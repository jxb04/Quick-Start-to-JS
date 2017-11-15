

var sign = prompt("What is your astrological sign?").toLowerCase();
alert("Sensing..sensing your future.");

switch(sign) {
  case "taurus":
    alert("The full hamburger moon crosses your ruling planet.  You will have a strong urge today to have a meal around noon.  You will then either eat lunch, or not eat lunch and be very hungry.");
    break;
  case "virgo":
    alert("Your emotions will make you feel thigns today.");
    break;
  case "leo":
    alert("Due to the energy of the changing Moon there is a high likelyhood that your favorite color is either green, or not green.");
    break;
  default:
    alert("Please enter a valid sign.");
    break;
}