// Reference page
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
// Form submission section
var downloadButton = document.getElementById('download-button');
// Form submission section listener
form.addEventListener('submit', function (event) {
    event.preventDefault(); //page reload prevent
    //collect values of input
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //data save in localstorage with the key of username
    var dataResume = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(dataResume)); //data save locally
    //Generate resume content dynamically
    var HTMLElement = "\n    <h3><u>Editable Resume:</u></h3>\n    <h2><u>Personal Information:</u></h2>\n    <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone No.:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n    <h2><u>Education:</u></h2>\n    <p conteneteditable=\"true\">").concat(education, "</p>\n    <h2><u>Exprience:</u></h2>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    <h2><u>Skills:</u></h2>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    //Generate resume display
    resumeDisplay.innerHTML = HTMLElement;
    //URL 
    var URLofResume = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //Display link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = URLofResume;
    shareableLinkElement.textContent = URLofResume;
});
// PDF Download Button
downloadButton.addEventListener('click', function () {
    window.print(); //this will show to allow user to save as PDF
});
//URL
window.addEventListener('DOMContentLoaded', function () {
    var paramsOfURL = new URLSearchParams(window.location.search);
    var userName = paramsOfURL.get('username');
    if (userName) {
        var saveResumeData = localStorage.getItem(userName);
        if (saveResumeData) {
            var resumeData = JSON.parse(saveResumeData);
            document.getElementById('username').value = userName;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
