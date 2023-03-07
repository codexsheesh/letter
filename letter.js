alert("Welcome User");

let advice = " ";
let name = prompt("What is your name?");
if (name == " " || name == null) {
  alert("it is okay to private your name");
} else {
  alert("Hi " + name + " what I can do for you?");
}
let choice = prompt("Do you want a some advice? yes/no");
if (choice == "yes" || choice == "Yes" || choice == "YES") {
  advice = prompt("About love? or About life?");
  if (advice == "love" || advice == "Love" || advice == "LOVE") {
    alert("Wag na sadboy HAHAHA");
  } else if (advice == "life" || advice == "Life" || advice == "LIFE") {
    alert(
      "Magpakatatag ka sa mga pagsubok sa buhay at huwag kang mawalan ng pag-asa. Lahat ng bagay ay posible kung may tiyaga at determinasyon"
    );
  }
} else {
  alert("Ok bawi next life😭");
}
