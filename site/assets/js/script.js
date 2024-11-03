// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Initialize loader
    const loader = document.getElementById("loader");
    const img = new Image();
    img.src = 'background.jpg'; // Check if the image is in cache

    img.onload = function() {
        loader.style.display = "none"; // Hide loader when image is loaded
    };

    window.onload = function() {
        document.getElementById('loader').style.display = 'none';
    };    
    
    img.onerror = function() {
        setTimeout(() => {
            loader.style.display = "none"; // Hide loader after 1 second if there's an error
        }, 1000);
    };

    // Hide the loader immediately if the image is already cached
    if (img.complete) {
        loader.style.display = "none";
    }

    // Menu toggle functionality for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active'); // Toggle menu visibility
    });

    // Close the menu when a link is clicked
    nav.addEventListener('click', function() {
        nav.classList.remove('active'); // Hide menu on link click
    });

    // Smooth scrolling for internal links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑';
    backToTopBtn.className = 'back-to-top';
    document.body.appendChild(backToTopBtn);

    // Show the button when scrolling down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block'; // Show button after scrolling 300px
        } else {
            backToTopBtn.style.display = 'none'; // Hide button
        }
    });

    // Scroll to top when the button is clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Style for the back-to-top button
    const styles = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #BF9A5A;
            color: #F3E2D0;
            border: none;
            border-radius: 5px;
            padding: 10px 15px;
            font-size: 18px;
            cursor: pointer;
            display: none; /* Hidden by default */
            transition: opacity 0.3s;
            z-index: 1000;
        }
        
        .back-to-top:hover {
            background: #A07F5A;
        }
    `;

    // Append styles to head
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
});

