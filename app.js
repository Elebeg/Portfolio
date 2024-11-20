document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll('.skill-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const projectsSection = document.querySelector('.projects-section'); 
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelectorAll("#mobile-nav a");
    const anchors = document.querySelectorAll('nav a[href^="#"]');
    let currentIndex = 0;
    let sliderInterval;

    function showItem(index) {
        skillItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function startSlider() {
        sliderInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % skillItems.length;
            showItem(currentIndex);
        }, 5000);
    }

    function stopSlider() {
        clearInterval(sliderInterval);
    }

    prevBtn.addEventListener('click', () => {
        stopSlider();
        currentIndex = (currentIndex - 1 + skillItems.length) % skillItems.length;
        showItem(currentIndex);
        startSlider();
    });

    nextBtn.addEventListener('click', () => {
        stopSlider();
        currentIndex = (currentIndex + 1) % skillItems.length;
        showItem(currentIndex);
        startSlider();
    });

    showItem(currentIndex);
    startSlider();

    projectsSection.addEventListener('mouseenter', stopSlider);
    projectsSection.addEventListener('mouseleave', startSlider);

    window.onload = () => {
        const words = document.querySelectorAll('.word');
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('visible');
            }, index * 100);
        });
    };

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    menuToggle.addEventListener("click", () => {
        const isVisible = mobileNav.style.display === "flex";
        mobileNav.style.display = isVisible ? "none" : "flex"; 
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuToggle.checked = false;
            }
        });
    });
});
