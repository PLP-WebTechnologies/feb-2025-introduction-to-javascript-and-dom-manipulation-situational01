// 1. Change text content dynamically
document.querySelector(".motto").textContent =
  "Authentic African Flavors, Made with Love";

// 2. Modify CSS styles dynamically
const hero = document.querySelector(".hero");
hero.style.backgroundColor = "#fff3e0";
hero.style.padding = "20px";
hero.style.borderRadius = "10px";

// 3. Add/Remove Thank You message when button is clicked
document.querySelectorAll(".order").forEach((btn) => {
  btn.addEventListener("click", function () {
    const parent = this.parentElement;
    let message = parent.querySelector("p.thank-you");

    if (!message) {
      message = document.createElement("p");
      message.textContent = "Thank you for your order!";
      message.classList.add("thank-you");
      message.style.color = "green";
      message.style.fontWeight = "bold";
      message.style.marginTop = "10px";
      parent.appendChild(message);

      // Auto-hide after 3 seconds
      setTimeout(() => {
        message.remove();
      }, 3000);
    } else {
      message.remove();
    }
  });
});

// 4. Toggle dark/light mode
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Theme";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "10px";
toggleBtn.style.right = "10px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.backgroundColor = "#222";
toggleBtn.style.color = "#fff";
document.body.appendChild(toggleBtn);

let darkMode = false;
toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
  document.body.style.color = darkMode ? "#ffffff" : "#000000";
});

// 5. Animate order buttons on hover
const orderButtons = document.querySelectorAll(".order");
orderButtons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
    btn.style.transition = "transform 0.2s ease";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});

// 6. Display Total Order Price (dummy logic - adds total when clicked)
let total = 0;
const priceDisplay = document.createElement("div");
priceDisplay.style.position = "fixed";
priceDisplay.style.bottom = "10px";
priceDisplay.style.right = "10px";
priceDisplay.style.backgroundColor = "#f1f1f1";
priceDisplay.style.padding = "10px";
priceDisplay.style.border = "1px solid #ccc";
priceDisplay.style.borderRadius = "8px";
priceDisplay.textContent = "Total: Ksh 0";
document.body.appendChild(priceDisplay);

orderButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const priceText = btn.parentElement.querySelector(".price").textContent;
    const amount = parseInt(priceText.replace("Ksh", "").trim());
    total += amount;
    priceDisplay.textContent = `Total: Ksh ${total}`;
  });
});

// 7. Live Time in Header
const logo = document.querySelector(".logo");
const timeSpan = document.createElement("span");
timeSpan.style.marginLeft = "15px";
timeSpan.style.fontSize = "14px";
logo.appendChild(timeSpan);

setInterval(() => {
  const now = new Date();
  timeSpan.textContent = now.toLocaleTimeString();
}, 1000);
