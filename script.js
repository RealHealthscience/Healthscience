document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const updateCount = () => {
            const target = +stat.getAttribute('data-target');
            const count = +stat.innerText;

            const increment = target / 200;

            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                stat.innerText = target;
            }
        };
        updateCount();
    });

    gsap.registerPlugin(ScrollTrigger);
    const ribbons = document.getElementById("ribbons");
    gsap.to(ribbons, {
        y: -50,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});