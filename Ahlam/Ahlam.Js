const klasgenoten = [
    { naam: "Ahlam Adda", foto: "../assets/squad1j-ahlam.jpg", link: "" },
    { naam: "Anass", foto: "../assets/squad1j-anass.jpg", link: "" },
    { naam: "Ayoub", foto: "../assets/squad1j-ayoub.jpg", link: "" },
    { naam: "Bronx", foto: "../assets/squad1j-bronx.jpg", link: "" },
    { naam: "Chama", foto: "../assets/squad1j-chama.jpg", link: "" },
    { naam: "Heba Handouka", foto: "../assets/squad1j-heba.jpg", link: "" },
    { naam: "Iman", foto: "../assets/squad1j-iman.jpg", link: "" },
    { naam: "Jadon", foto: "../assets/squad1j-jadon.jpg", link: "" },
    { naam: "Jamie Vos", foto: "../assets/squad1j-jamie.jpg", link: "" },
    { naam: "Jamil", foto: "../assets/squad1j-jamil.jpg", link: "" },
    { naam: "Jasin", foto: "../assets/squad1j-jasin.jpg", link: "" },
    { naam: "Julian", foto: "../assets/squad1j-julian.jpg", link: "" },
    { naam: "Ké", foto: "../assets/squad1j-ké.jpg", link: "" },
    { naam: "Kevin", foto: "../assets/squad1j-kevin.jpg", link: "" },
    { naam: "Kurollos", foto: "../assets/squad1j-kurollos.jpg", link: "" },
    { naam: "Luc", foto: "../assets/squad1j-luc.jpg", link: "" },
    { naam: "Luka", foto: "../assets/squad1j-luka.jpg", link: "" },
    { naam: "Lynn", foto: "../assets/squad1j-lynn.jpg", link: "" },
    { naam: "Maarten", foto: "../assets/squad1j-maarten.jpg", link: "" },
    { naam: "Mathijs", foto: "../assets/squad1j-mathijs.jpg", link: "" },
    { naam: "Meraichio", foto: "../assets/squad1j-meraichio.jpg", link: "" },
    { naam: "Mete", foto: "../assets/squad1j-mete.jpg", link: "" },
    { naam: "Sadaf", foto: "../assets/squad1j-sadaf.jpg", link: "" },
    { naam: "Sieuwke", foto: "../assets/squad1j-sieuwke.jpg", link: "" },
    { naam: "Tom", foto: "../assets/squad1j-tom.jpg", link: "" },
]

function loadStudents() {
    const container = document.getElementById("students");

    klasgenoten.forEach(student => {
        const article = document.createElement("article");
        article.className = "student";

        const studentFigure = document.createElement("figure");
        studentFigure.className = "studentFigure";

        // Mugshot van student
        const studentImage = document.createElement("img")
        studentImage.src = student.foto;
        studentImage.alt = `Foto van ${student.naam}`;
        studentImage.width = 200;

        // Naam van student
        const studentCaption = document.createElement("figcaption");
        studentCaption.textContent = student.naam;

        // Voeg afbeelding en naam toe aan figure
        studentFigure.appendChild(studentImage);
        studentFigure.appendChild(studentCaption);

        // Voeg figure toe aan artikel
        article.appendChild(studentFigure);

        // Voeg artikel toe aan container
        container.appendChild(article);

    })
}

document.addEventListener("DOMContentLoaded", loadStudents);