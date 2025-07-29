let intervalId = null;
let currentIndex = 0;
let currentMessage = [];
let originalMessage = ""; // 🔹 Store the original message

// 🟦 WPM Speed controls (+ / -)
document.getElementById("increaseSpeed").addEventListener("click", () => {
  const speedInput = document.getElementById("speed");
  let currentWPM = parseInt(speedInput.value, 10) || 120;
  if (currentWPM < 1000) {
    speedInput.value = currentWPM + 10;
  }
});

document.getElementById("decreaseSpeed").addEventListener("click", () => {
  const speedInput = document.getElementById("speed");
  let currentWPM = parseInt(speedInput.value, 10) || 120;
  if (currentWPM > 10) {
    speedInput.value = currentWPM - 10;
  }
});

// 🧠 Converts WPM → delay per character (in ms)
function getSymbolDelayFromWPM() {
  const wpm = parseInt(document.getElementById("speed").value, 10) || 120;
  const delay = Math.round(60000 / (wpm * 5)); // 5 characters per word standard
    return Math.max(delay, 80); // ⏲️ Don't go below 80ms
}

const numberToWordMap = {
  "0": "zro",
  "1": "one",
  "2": "two",
  "3": "tre",
  "4": "for",
  "5": "fiv",
  "6": "six",
  "7": "svn",
  "8": "ate",
  "9": "nin",
  ",": "mim",
  "-": "du",
  "/": "xe",
  ".": "aaa"
};

function stopDisplay() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function getSymbolImage(letter) {
  if (letter === " ") return "symbol/null.jpg";
  return `symbol/${letter.toUpperCase()}.jpg`;
}

function expandMessageWithGroupedDigits(input) {
  const result = [];
  const chars = input.toLowerCase();

  let i = 0;
  while (i < chars.length) {
    const char = chars[i];

    if (/\d/.test(char)) {
      result.push("num");
      result.push("null");

      while (i < chars.length && /\d/.test(chars[i])) {
        const word = numberToWordMap[chars[i]];
        for (const letter of word) {
          result.push(letter);
        }
        result.push("null");
        i++;
      }

      result.push("num");
    } else if (numberToWordMap[char]) {
      const word = numberToWordMap[char];
      for (const letter of word) {
        result.push(letter);
      }
      result.push("null");
      i++;
    } else if (char === " ") {
      result.push("null");
      i++;
    } else if (/[a-z]/.test(char)) {
      result.push(char);
      i++;
    } else {
      i++; // Skip symbols
    }
  }

  return result;
}

function displayNextSymbol() {
  if (currentIndex >= currentMessage.length) {
    stopDisplay();
    // ✅ Show null.jpg when done
    document.getElementById("symbolImg").src = "symbol/null.jpg";
    return;
  }

  const currentChar = currentMessage[currentIndex];
  const symbolImg = document.getElementById("symbolImg");

  if (currentChar === "null") {
    symbolImg.src = "symbol/null.jpg";
  } else if (currentChar === "num") {
    symbolImg.src = "symbol/num.jpg";
  } else if (/^[a-z]$/i.test(currentChar)) {
    symbolImg.src = getSymbolImage(currentChar);
  } else {
    currentIndex++;
    
  }

  currentIndex++;
}

// 🔹 User submits custom message
document.getElementById("submitBtn").addEventListener("click", () => {
  const userInput = document.getElementById("userInput").value.trim();

  if (!userInput) {
    alert("Please enter a message.");
    return;
  }

  originalMessage = userInput; // ✅ Store message
  stopDisplay();

  const expanded = expandMessageWithGroupedDigits(userInput);
  currentMessage = expanded;
  currentIndex = 0;

  const speed = getSymbolDelayFromWPM();

  displayNextSymbol();
  intervalId = setInterval(displayNextSymbol, speed);
});

// 🔹 Start random short message
document.getElementById("startBtn").addEventListener("click", () => {
  if (!shortMessages || shortMessages.length === 0) {
    alert("No short messages available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * shortMessages.length);
  const randomMessage = shortMessages[randomIndex];

  originalMessage = randomMessage; // ✅ Store message
  stopDisplay();

  const expanded = expandMessageWithGroupedDigits(randomMessage);
  currentMessage = expanded;
  currentIndex = 0;

  const speed = getSymbolDelayFromWPM();

  displayNextSymbol();
  intervalId = setInterval(displayNextSymbol, speed);
});

// 🔹 Show answer
document.getElementById("showAnswerBtn").addEventListener("click", () => {
  const answerEl = document.getElementById("correctAnswer");
  answerEl.textContent = originalMessage || "No message was transmitted.";
  answerEl.style.display = "block";
});
