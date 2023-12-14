document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const designations = ["Web Developer", "Programmer", "Student", "Gamer", "Noob", "Batman"];

function changeDesignation() {
    const designationElement = document.getElementById("designation");
    let currentIndex = 0;

    setInterval(() => {
        designationElement.classList.add("fallDown");

        setTimeout(() => {
            const newDesignation = designations[currentIndex];
            designationElement.textContent = newDesignation;

            currentIndex = (currentIndex + 1) % designations.length;

            if (newDesignation === "Batman") {
                designationElement.classList.add("red");
            } else {
                designationElement.classList.remove("red");
            }

            designationElement.classList.remove("fallDown");
        }, 500);
    }, 3000);
}

window.onload = changeDesignation;