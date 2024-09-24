//det refernce fom form & display
var form = document.getElementById('resume-form') as HTMLFormElement
var resumeDisplay = document.getElementById('resume-display') as HTMLDivElement

//handle form submission
form.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); //prevent page reload

    //collect user input
    const name = (document.getElementById('name') as  HTMLInputElement).value
    const email = (document.getElementById('email') as  HTMLInputElement).value
    const phone = (document.getElementById('phone') as  HTMLInputElement).value
    const education = (document.getElementById('education') as  HTMLInputElement).value
    const experience = (document.getElementById('experience') as  HTMLInputElement).value
    const skills = (document.getElementById('skills') as  HTMLInputElement).value

//generate the resume dynamicallly
const resumeHTML = `
<h3><b><u>Resume:</u></b></h3>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone No.:</b>${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Work Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

// Display

if (resumeDisplay) {
    resumeDisplay.innerHTML = resumeHTML
} else {
    console.log('The resume Display Element is Missing!!');
}
});