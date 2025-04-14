document.addEventListener("DOMContentLoaded", function () {
    // Cookie Consent Elements
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

   
// Check if the user has already made a choice
if (!localStorage.getItem("cookies-accepted") && !localStorage.getItem("cookies-rejected")) {
  cookieBanner.style.display = "flex"; // Show cookie banner
}

// Accept Cookies
acceptCookiesBtn.addEventListener("click", () => {
  localStorage.setItem("cookies-accepted", "true");
  cookieBanner.style.display = "none"; // Hide cookie banner
});

// Reject Cookies
rejectCookiesBtn.addEventListener("click", () => {
  localStorage.setItem("cookies-rejected", "true");
  cookieBanner.style.display = "none"; // Hide cookie banner
});

//login
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email");
            const password = document.getElementById("password");

            if (email.checkValidity() && password.checkValidity()) {
                alert("🎉 Welcome new customer!");
                document.getElementById("successMessage").style.display = "block";
                loginForm.reset();
            } else {
                alert("Please enter a valid email and password.");
            }
        });
    }

    // Handle form submission
document.getElementById("signInForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get values from form fields
  const username = document.getElementById("username").value;

  // Show the success message with the username
  document.getElementById("userName").textContent = username;
  document.getElementById("successMessage").style.display = "block";
});

    // Mobile Menu Toggle (If You Plan to Add a Menu Button)
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    if (menuIcon && navbar) {
      menuIcon.addEventListener("click", function () {
          navbar.classList.toggle("active");
      });
  }
});

// Dark Mode Toggle Script
const darkModeBtn = document.getElementById("dark-mode-btn");

// Check if dark mode is already set in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save the dark mode preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Get the button
const goToTopBtn = document.getElementById("goToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// Close the Cookies by accept and reject
function closebanner(id) {
  const banner = document.getElementById(id);
  if (banner) {
      banner.style.display = "none";
  }
}


// //////////////// Contact page

        // JavaScript form submission
        document.getElementById('contactForm').addEventListener('submit', function (event) {
          event.preventDefault();
          showSuccessMessage();
        });
    
        function showSuccessMessage() {
          document.getElementById('success').style.display = 'block';
          document.getElementById('contactForm').reset();
        }