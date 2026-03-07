let currentTab = "all";
const tabActive = ["btn-primary", "text-white"];
const tabInactive = ["bg-transparent", "text-black"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const noJobs = document.getElementById("no-jobs-section");
const availableJobs = document.getElementById("available");

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  currentTab = tab;
  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.add(...tabActive);
      tabName.classList.remove(...tabInactive);
    } else {
      tabName.classList.remove(...tabActive);
    }
  }

  const pages = [allContainer, interviewContainer, rejectedContainer];
  for (const page of pages) {
    page.classList.add("hidden");
  }

  noJobs.classList.add("hidden");

  let activeContainer;
  if (tab === "all") {
    activeContainer = allContainer;
  } else if (tab === "interview") {
    activeContainer = interviewContainer;
  } else {
    activeContainer = rejectedContainer;
  }

  activeContainer.classList.remove("hidden");
  availableJobs.innerText = activeContainer.children.length;
  if (activeContainer.children.length === 0) {
    noJobs.classList.remove("hidden");
  }
}

// count jobs

const totalJob = document.getElementById("total-job-number");
const interviewJob = document.getElementById("interview-job-number");
const rejectedJob = document.getElementById("rejected-job-number");


function updateJobs() {
  totalJob.innerText = allContainer.children.length;
  interviewJob.innerText = interviewContainer.children.length;
  rejectedJob.innerText = rejectedContainer.children.length;
  switchTab(currentTab);
}

switchTab("all");
updateJobs();

document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const clickEvent = event.target;
    const card = clickEvent.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");

    if (clickEvent.classList.contains("interview")) {
      interviewContainer.appendChild(card);
      status.innerText = "Interviewed";
      updateJobs();
    }
    if (clickEvent.classList.contains("reject")) {
      rejectedContainer.appendChild(card);
      status.innerText = "Rejected";
      updateJobs();
    }
    if (clickEvent.classList.contains("delete")) {
      parent.removeChild(card);
      updateJobs();
    }
  });