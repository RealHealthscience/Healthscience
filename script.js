document.addEventListener("DOMContentLoaded", () => {
    // GSAP animation for floating ribbons
    const ribbons = document.getElementById("ribbons");
    if (ribbons) {
        gsap.to(ribbons, {
            y: -50,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Stats animation for the statistics section
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const updateCount = () => {
            const target = +stat.getAttribute('data-target'); // Get the target number from data attribute
            const count = +stat.innerText; // Get current count
            const increment = target / 200; // Calculate increment

            if (count < target) {
                stat.innerText = Math.ceil(count + increment); // Update count
                setTimeout(updateCount, 1); // Continue updating
            } else {
                stat.innerText = target; // Ensure it reaches target
            }
        };
        updateCount(); // Start counting up
    });
});