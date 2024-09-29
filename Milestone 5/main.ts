// Reference page

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById ('shareable-link') as HTMLAnchorElement;

// Form submission section
const downloadButton = document.getElementById('download-button') as HTMLButtonElement;

// Form submission section listener

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();  //page reload prevent
    //collect values of input
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    //data save in localstorage with the key of username
    const dataResume = {
        name,email,phone,education,experience,skills
    };
    localStorage.setItem(username, JSON.stringify(dataResume));  //data save locally

    //Generate resume content dynamically
    const HTMLElement = `
    <h3><u>Editable Resume:</u></h3>
    <h2><u>Personal Information:</u></h2>
    <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
    <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
    <p><b>Phone No.:</b> <span contenteditable="true">${phone}</span></p>
    <h2><u>Education:</u></h2>
    <p conteneteditable="true">${education}</p>
    <h2><u>Exprience:</u></h2>
    <p contenteditable="true">${experience}</p>
    <h2><u>Skills:</u></h2>
    <p contenteditable="true">${skills}</p>
    `;
    //Generate resume display
    resumeDisplay.innerHTML = HTMLElement;
    //URL 
    const URLofResume = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    //Display link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = URLofResume;
    shareableLinkElement.textContent = URLofResume;
});
// PDF Download Button
downloadButton.addEventListener('click' , ()=>{
    window.print(); //this will show to allow user to save as PDF
});
//URL
window.addEventListener('DOMContentLoaded' , ()=>{
    const paramsOfURL = new URLSearchParams(window.location.search);
    const userName = paramsOfURL.get('username');
    if (userName) {
        const saveResumeData = localStorage.getItem(userName);
        if (saveResumeData) {
            const resumeData = JSON.parse(saveResumeData);
            (document.getElementById('username') as HTMLInputElement).value = userName;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('education') as HTMLInputElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;

        }
    }
});
