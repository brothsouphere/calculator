const display = document.getElementById("display");
let current = "";

const randomMessages = [
  "I don't know, man.",
  "U should know this",
  "print('hello world')",
  "¯\\_(ツ)_/¯",
  "brain.exe has stopped",
  "what is this bro?",
  "damnnn",
  "Let’s pretend that worked.",
  "System: Calculating...",
  "vibes only",
  "C://brain.exe loading...",
  "i'm not a calculator",
  "This font slaps",
  "Too much whitespace maybe?",
  "In code we trust",
  "01101100 01101111 01101100",
  "ask chatgpt",
  "this is not my job",
  "numbers again?",
  "Let’s pretend that’s right",
  "brb emailing NASA this answer",
  "Statistically speaking... idk",
  "Math Girl Summer",
  "so u like summer or winter?",
  "this is the color black",
  "u suck at math",
  "I graduated from law school, idk math",
  "i bet u got an F",
  "i cant solve it",
  "let result = ?"
]; //random lekseis pou tha vgazei 

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (btn.classList.contains("num") || btn.classList.contains("op")) {
      current += value;
      display.textContent = current;
    } else if (btn.classList.contains("clr")) {
      current = "";
      display.textContent = "0";
    } else if (btn.classList.contains("eq")) {
      const random = randomMessages[Math.floor(Math.random() * randomMessages.length)];
      display.textContent = random;
      current = ""; 
    }
  });
});
