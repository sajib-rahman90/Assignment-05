let hearts = parseInt(document.getElementById("nav-heart-count").textContent);
let coins = parseInt(document.getElementById("nav-coin-count").textContent);

const navHeartCount = document.getElementById("nav-heart-count");
const navCoinCount = document.getElementById("nav-coin-count");
const callHistoryList = document.getElementById("call-history-list");
const clearHistoryBtn = document.querySelector("#call-h-btn button");

// --- Heart icon functionality using Event Delegation ---

document
  .querySelector(".card-container")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-heart")) {
      hearts += 1;
      navHeartCount.textContent = hearts;
    }
  });

// --- Copy button functionality ---
const navCopyCount = document.getElementById("nav-copy-count");
let copyCount = parseInt(navCopyCount.textContent);

document.querySelectorAll(".card .copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const serviceNumber = card.querySelectorAll("h4")[1].textContent;

    navigator.clipboard
      .writeText(serviceNumber)
      .then(() => {
        alert(`নম্বর কপি হয়েছে ${serviceNumber}`);
        copyCount += 1;
        navCopyCount.textContent = copyCount;
      })
      .catch(() => {
        alert("Failed to copy number.");
      });
  });
});

// --- Call button functionality ---
document.querySelectorAll(".card .call-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const serviceName = card.querySelector("h4").textContent;
    const serviceNumber = card.querySelectorAll("h4")[1].textContent;

    if (coins <= 0) {
      alert("আপনার পর্যাপ্ত কয়েন নেই । কল করতে কমপক্ষে ২০ কয়েন লাগবে ।");
      return;
    }

    coins -= 20;
    navCoinCount.textContent = coins;

    alert(`Calling ${serviceName}  ${serviceNumber}`);

    const now = new Date();
    const timeStr = now.toLocaleTimeString();

    // Add to Call History with time
    const entry = document.createElement("div");
    entry.className = "flex justify-between py-2 border-b border-gray-200";
    entry.innerHTML = `

            <div>
                <p>${serviceName}</p>
                <p>${serviceNumber}</p>
            </div>
            <div>
                <p> ${timeStr}</p>
            </div>
        
      `;

    callHistoryList.appendChild(entry);
  });
});

// --- Clear History functionality ---
clearHistoryBtn.addEventListener("click", function () {
  callHistoryList.innerHTML = "";
});
