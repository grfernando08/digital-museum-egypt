const filters =
    document.querySelectorAll(".filter");

const cards =
    document.querySelectorAll(".archive-card");

const search =
    document.getElementById("artifactSearch");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {

            button.classList.remove("active");

        });

        filter.classList.add("active");

        const category =
            filter.dataset.filter;


        cards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


search.addEventListener("input", () => {

    const query =
        search.value.toLowerCase().trim();


    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();


        if (name.includes(query)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


function showArchiveArtifact(
    title,
    category,
    date,
    description
) {

    document.getElementById("archiveTitle")
        .textContent = title;

    document.getElementById("archiveCategory")
        .textContent = category;

    document.getElementById("archiveDate")
        .textContent = date;

    document.getElementById("archiveDescription")
        .textContent = description;


    document.getElementById("archiveModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeArchiveArtifact() {

    document.getElementById("archiveModal")
        .classList.remove("show");

    document.body.style.overflow = "";

}