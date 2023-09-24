const components = document.querySelectorAll('.component');
const observerOptions = {
    threshold: 0.2,
};
const observer = new IntersectionObserver(onIntersection, observerOptions);
const animatedComponents = new Set();


function animateComponent(component) {
    gsap.set(component, { opacity: 0, y: 80 });

    gsap.to(component, {
        opacity: 1,
        y: 0,
        duration: .5,
        ease: 'power2',
    });
}

function onIntersection(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (!animatedComponents.has(entry.target)) {
                animateComponent(entry.target);
                animatedComponents.add(entry.target);
            }
        } else {
            animatedComponents.delete(entry.target);
        }
    });
}

components.forEach((component) => {
    observer.observe(component);
});