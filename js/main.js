document.addEventListener("DOMContentLoaded", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hidden");

    }, 1500);


    const menuToggle =
        document.getElementById("menuToggle");

    const navigation =
        document.getElementById("mainNavigation");


    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            navigation.classList.toggle("open");

        });

    }


    const statNumbers =
        document.querySelectorAll("[data-target]");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const element =
                        entry.target;

                    const target =
                        Number(element.dataset.target);

                    let current = 0;

                    const increment =
                        target / 70;


                    const counter =
                        setInterval(() => {

                            current += increment;

                            if (current >= target) {

                                current = target;

                                clearInterval(counter);

                            }


                            element.textContent =
                                Math.floor(current).toLocaleString()
                                + (target >= 1000 ? "+" : "");

                        }, 20);


                    observer.unobserve(element);

                });

            },
            {
                threshold: .7
            }
        );


    statNumbers.forEach(number => {

        observer.observe(number);

    });

});


function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


function openArtifact(title, period, date, description) {

    const modal =
        document.getElementById("artifactModal");

    document.getElementById("modalTitle")
        .textContent = title;

    document.getElementById("modalCategory")
        .textContent = period;

    document.getElementById("modalDate")
        .textContent = date;

    document.getElementById("modalDescription")
        .textContent = description;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeArtifact() {

    const modal =
        document.getElementById("artifactModal");

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeArtifact();

    }

});


function choosePath(path) {

    const result =
        document.getElementById("journeyResult");


    const journeys = {

        history:
            "Your journey begins with the rulers of Egypt. Start with the Early Dynastic Period and travel through the Old, Middle and New Kingdoms.",

        science:
            "Your journey begins with Egyptian knowledge. Explore mathematics, astronomy, medicine, engineering and the techniques behind monumental architecture.",

        myths:
            "Your journey begins in the world of gods and legends. Discover stories surrounding Ra, Osiris, Isis, Horus, Anubis and many others."

    };


    result.style.opacity = "0";


    setTimeout(() => {

        result.textContent =
            journeys[path];

        result.style.opacity = "1";

    }, 200);

}