// Scroll to the top of the page when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Cookie Consent
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  // Show cookie banner if not already accepted/rejected
  if (!localStorage.getItem("cookies-accepted") && !localStorage.getItem("cookies-rejected")) {
    cookieBanner.style.display = "flex";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookies-accepted", "true");
    cookieBanner.style.display = "none";
    alert("Thank you for accepting cookies! 🍪");
  });

  rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookies-rejected", "true");
    cookieBanner.style.display = "none";
  });

// Login & Signup form handling
$(document).ready(function () {
  const $loginForm = $("#loginForm");
  const $signUpForm = $("#signUpForm"); // changed from signInForm

  // Login form logic
  if ($loginForm.length) {
    $loginForm.on("submit", function (e) {
      e.preventDefault();

      const $email = $("#email");
      const $password = $("#password");

      if ($email[0].checkValidity() && $password[0].checkValidity()) {
        alert("🎉 Welcome back!");
        $("#successMessage").show();
        $loginForm[0].reset();
      } else {
        alert("Please enter a valid email and password.");
      }
    });
  }

  // Signup form logic
  if ($signUpForm.length) {
    $signUpForm.on("submit", function (e) {
      e.preventDefault();

      const username = $("#username").val();
      $("#userName").text(username);
      $("#successMessage").show();
    });
  }
});

  // Mobile menu toggle
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");
  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  }

  // Dark mode toggle
  const darkModeBtn = document.getElementById("dark-mode-btn");

  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode",
        document.body.classList.contains("dark-mode") ? "enabled" : "disabled"
      );
    });
  }
});

// Go to top button visibility
const goToTopBtn = document.getElementById("goToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};



$(document).ready(function () {
  // Example: Hide cookie banner with fadeOut
  $("#accept-cookies").click(function () {
    $("#cookie-banner").fadeOut();
    localStorage.setItem("cookies-accepted", "true");
  });

  $("#reject-cookies").click(function () {
    $("#cookie-banner").fadeOut();
    localStorage.setItem("cookies-rejected", "true");
  });
});



// Trigger animations when in viewport
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          observer.unobserve(entry.target); // Remove after animating once
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animated").forEach(el => {
    observer.observe(el);
  });
});