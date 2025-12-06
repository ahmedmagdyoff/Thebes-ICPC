// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// Collapsible sections for Level 0 and Level 1
const level0Header = document.getElementById("level0-header");
const level0Content = document.getElementById("level0-content");
const level1Header = document.getElementById("level1-header");
const level1Content = document.getElementById("level1-content");

// Initialize sections as expanded if they exist
if (level0Content) {
  level0Content.style.maxHeight = level0Content.scrollHeight + "px";
}
if (level1Content) {
  level1Content.style.maxHeight = level1Content.scrollHeight + "px";
}

if (level0Header) {
  level0Header.addEventListener("click", () => {
    toggleSection(level0Header, level0Content);
  });
}

if (level1Header) {
  level1Header.addEventListener("click", () => {
    toggleSection(level1Header, level1Content);
  });
}

function toggleSection(header, content) {
  if (!header || !content) return;

  const isCollapsed =
    content.style.maxHeight === "0px" || content.style.maxHeight === "";

  if (isCollapsed) {
    // Expand the section
    content.style.maxHeight = content.scrollHeight + "px";
    header.classList.remove("collapsed");
  } else {
    // Collapse the section
    content.style.maxHeight = "0px";
    header.classList.add("collapsed");
  }
}

// Top performers slideshow
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
const pauseBtn = document.getElementById("pauseSlideBtn");
let currentSlide = 0;
let slideInterval;
let isPaused = false;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  currentSlide = index;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;

  slides[currentSlide].classList.add("active");
}

function startSlideInterval() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    if (!isPaused) {
      showSlide(currentSlide + 1);
    }
  }, 5000); // 5 seconds
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startSlideInterval(); // Always reset the interval
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startSlideInterval(); // Always reset the interval
  });
}

// Pause/Resume button
if (pauseBtn) {
  pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    if (isPaused) {
      pauseBtn.innerHTML = '<i class="fas fa-play"></i> Resume Auto-Slide';
      pauseBtn.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
      pauseBtn.style.color = "var(--success)";
    } else {
      pauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Auto-Slide';
      pauseBtn.style.backgroundColor = "";
      pauseBtn.style.color = "";
      startSlideInterval();
    }
  });
}

// Start the slideshow if there are slides
if (slides.length > 0) {
  startSlideInterval();
}

// Top performers button in hero section
const viewTopPerformersBtn = document.getElementById("viewTopPerformersBtn");
if (viewTopPerformersBtn) {
  viewTopPerformersBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const topPerformersSection = document.getElementById("top-performers");
    if (topPerformersSection) {
      window.scrollTo({
        top: topPerformersSection.offsetTop - 80,
        behavior: "smooth",
      });

      // Highlight the section briefly
      topPerformersSection.style.boxShadow =
        "0 0 0 3px rgba(108, 99, 255, 0.5)";
      setTimeout(() => {
        topPerformersSection.style.boxShadow = "";
      }, 1500);
    }
  });
}

// Practice Sheets Modal
const sheetsModal = document.getElementById("sheetsModal");
const practiceSheetsBtn = document.getElementById("practiceSheetsBtn");
const practiceSheetsBtnFooter = document.getElementById(
  "practiceSheetsBtnFooter"
);
const modalClose = document.getElementById("modalClose");
const level0SheetsBtn = document.getElementById("level0SheetsBtn");
const level1SheetsBtn = document.getElementById("level1SheetsBtn");

// Open modal when Practice Sheets Repository is clicked
if (practiceSheetsBtn) {
  practiceSheetsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (sheetsModal) {
      sheetsModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }
  });
}

if (practiceSheetsBtnFooter) {
  practiceSheetsBtnFooter.addEventListener("click", (e) => {
    e.preventDefault();
    if (sheetsModal) {
      sheetsModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }
  });
}

// Close modal
if (modalClose) {
  modalClose.addEventListener("click", () => {
    if (sheetsModal) {
      sheetsModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}

// Close modal when clicking outside
if (sheetsModal) {
  sheetsModal.addEventListener("click", (e) => {
    if (e.target === sheetsModal) {
      sheetsModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    sheetsModal &&
    sheetsModal.classList.contains("active")
  ) {
    sheetsModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Sheet buttons functionality with YOUR LINKS
if (level0SheetsBtn) {
  level0SheetsBtn.addEventListener("click", () => {
    window.open("https://codeforces.com/group/ad1tgTiYqR/contests", "_blank");
  });
}

if (level1SheetsBtn) {
  level1SheetsBtn.addEventListener("click", () => {
    window.open("https://vjudge.net/group/icpc-thebes-Level-1-2026", "_blank");
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Don't prevent default for modal buttons
    if (
      this.id === "practiceSheetsBtn" ||
      this.id === "practiceSheetsBtnFooter"
    ) {
      return;
    }

    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // If it's a section with collapsible content, expand it
      if (targetId === "#level0" && level0Content && level0Header) {
        level0Content.style.maxHeight = level0Content.scrollHeight + "px";
        level0Header.classList.remove("collapsed");
      } else if (targetId === "#level1" && level1Content && level1Header) {
        level1Content.style.maxHeight = level1Content.scrollHeight + "px";
        level1Header.classList.remove("collapsed");
      }
    }
  });
});

// Add active class to nav links based on scroll position
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const csv = `
Handle,All,Standings,UnStandings,Percentage
ahmedmagdyoff,85,63,24,100.00%
hosamahmed816,84,84,0,98.82%
3moSeifSalah,84,82,2,98.82%
mennahelal882,84,82,2,98.82%
MalkFares,76,72,4,89.41%
Mazen.Yehia,74,53,21,87.06%
basma108,73,72,1,85.88%
abdallahnabil209,73,73,0,85.88%
nehadelsawi,72,72,0,84.71%
Ahmed_Hossam_69,70,69,1,82.35%
`.trim().split("\n").slice(1);

const list = document.querySelector("#slide1 .performer-list");

csv.forEach((line, i) => {
  const [Handle, All, Standings, UnStandings, Percentage] = line.split(",");
  list.innerHTML += `
    <!-- Rank ${i + 1} -->
    <div class="performer">
      <div class="rank rank-${i + 1}">${i + 1}</div>
      <div class="performer-info">
        <h4>${Handle}</h4>
        <p>Solved: ${Standings} Problems</p>
      </div>
      <div class="score">${Percentage}</div>
    </div>
  `;
});