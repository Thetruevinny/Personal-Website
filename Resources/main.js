// Code for next button on project-1 list

let nextButton = document.getElementById('next')
let backButton = document.getElementById('back');

function projectChange(event) {
    document.getElementById('first').style.display = "none";
    document.getElementById('second').style.display = "inline-flex";
}

function projectOrginal(event) {
    document.getElementById('first').style.display = "inline-flex";
    document.getElementById('second').style.display = "none";
}


nextButton.onclick = projectChange;
backButton.onclick = projectOrginal;