import { Console } from "./Console.js";
import { delay } from "./utils.js";

const app = document.querySelector("#app");

app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
    await getInputValue();
   
    removeInput();
    await delay(150);
    Console.newLine(app);
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value.toLowerCase();

  if(value === "help"){
    Console.validCommand(app, value);
    
    Console.createCode(app, "github", "- My github page with my projects. Follow me there ;)");
    Console.createCode(app, "about", "- Who am I and what do I do.");
    Console.createCode(app, "contact", "- All my social networks.");
    Console.createCode(app, "clear", "- Clean the terminal.");
    
  }
  else if(value === "github"){
    Console.validCommand(app, value);
    Console.createText(app, "<a href='https://github.com/afontan' target='_blank'><i class='fab fa-github white'></i> github.com/afontan</a>")
  }
  else if(value === "about"){
    Console.validCommand(app, value);
    Console.createText(app, "Hi!, I'm Alejandro Fontán")
    Console.createText(app, "I'm a Fullstack/Cloud engineer with 7+ years of experience. I've worked with <span class='blue'>Java, Kotlin, Go, Javascript, Vue, Angular, React, MySQL, Postgres, Docker, Kubernetes, Flutter, and even more x)</span>")
    Console.createText(app, "I'm familiar with CI/CD tools like Jenkins, CircleCI, Spinnaker, AWS, GCP")
  }
  else if(value === "contact"){
    Console.validCommand(app, value);
    Console.createText(app, "<a href='https://github.com/afontan' target='_blank'><i class='fab fa-github white'></i> github.com/afontan</a>")
    Console.createText(app, "<a href='https://www.hackerrank.com/afontan91?hr_r=1' target='_blank'><i class='fa-solid fa-code white'></i> hackerrank.com/afontan91</a>")
    Console.createText(app, "<a href='https://leetcode.com/afontan/' target='_blank'><i class='fa-solid fa-code white'></i> leetcode.com/afontan</a>")
    Console.createText(app, "<a href='https://www.twitter.com/a_fontan/' target='_blank'><i class='fab fa-twitter white'></i> twitter.com/a_fontan/</a>")
    Console.createText(app, "<a href='https://www.linkedin.com/in/alejandro-font%C3%A1n/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/alejandro-fontán</a>")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    Console.invalidCommand(app, value);
    Console.createText(app,`command not found: ${value}`)
  }
}

await Console.openTerminal(app);