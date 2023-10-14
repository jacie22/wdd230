
//Date
document.getElementById('yr').innerHTML = new Date().getFullYear();
let text = document.lastModified;
document.querySelector("#lm").innerHTML = text;



//Responsive Hamburger Menu
function toggleMenu() {
    document.getElementsByClassName('primaryNav')[0].classList.toggle('responsive');
    
  }

//Dark Mode
  const modeButton = document.querySelector("#mode");
  const main = document.querySelector("main");
  
  modeButton.addEventListener("click", () => {
      if (modeButton.textContent.includes("Dark Mode ⚫")) {
          main.style.background = "#0f396b";
          main.style.color = "#faf3dd";
          modeButton.textContent = "Dark Mode ⚪";
      } else {
          main.style.background = "#faf3dd";
          main.style.color = "#0f396b";
          modeButton.textContent = "Light Mode ⚫";
      }
  });
  


  //form

  const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);


function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}




