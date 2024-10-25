document.getElementById("pop-up").style.display = "none";
document.getElementById("pop-up-yes").style.display = "none";

function showPopUp(){
    document.getElementById("pop-up").style.display ="flex";
    
    setTimeout(closePopUp, 1500);
}
function closePopUp(){
    document.getElementById("pop-up").style.display = "none";
}

function showPopUpYes(){
    document.getElementById("pop-up-yes").style.display ="flex";
    setTimeout(closePopUpYes, 2000);
}
function closePopUpYes(){
    document.getElementById("pop-up-yes").style.display = "none";
}

var name = document.querySelector('#name').addEventListener('input', function(){
    if(/^\s/.test(this.value)){ // Prevent first input to be space, newline and tabs
        this.value = '';
    }
})

document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get form fields
    const name = document.querySelector('input[placeholder="Enter your name"]');
    const gender = document.querySelector('input[name="gender"]:checked');
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelectorAll('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');

    // Array to store all question containers for validation
    const questionContainers = document.querySelectorAll('.mb-3.border');
    
    // Reset styles
    questionContainers.forEach(container => {
        container.classList.remove('border-danger');
    });

    let valid = true;

    // Validate Name
    if (name.value.trim() === '') {
        name.classList.add('is-invalid');
        valid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    // Validate Gender
    const genderContainer = document.getElementById('gender');
    if (!gender) {
        genderContainer.classList.add('border-danger');
        valid = false;
    }

    // Validate Question 1
    const q1Container = questionContainers[1];
    if (!q1) {
        q1Container.classList.add('border-danger');
        valid = false;
    }

    // Validate Question 2
    const q2Container = questionContainers[2];
    if (!q2) {
        q2Container.classList.add('border-danger');
        valid = false;
    }

    // Validate Question 3
    const q3Container = questionContainers[3];
    if (!q3) {
        q3Container.classList.add('border-danger');
        valid = false;
    }

    // Validate Question 4 (at least one checkbox must be selected)
    const q4Container = questionContainers[4];
    if (q4.length === 0) {
        q4Container.classList.add('border-danger');
        valid = false;
    }

    // Validate Question 5
    const q5Container = questionContainers[5];
    if (!q5) {
        q5Container.classList.add('border-danger');
        valid = false;
    }

    // Validate Question 6
    const q6Container = questionContainers[6];
    if (!q6) {
        q6Container.classList.add('border-danger');
        valid = false;
    }

    // If not valid, show alert
    if (!valid) {
        showPopUp();
    } else {
        name.value = " ";
        document.getElementById('genderMale').checked = false;
        document.getElementById('genderFemale').checked = false;
        document.getElementById('q1a').checked = false;
        document.getElementById('q1b').checked = false;
        document.getElementById('q1c').checked = false;
        document.getElementById('q1d').checked = false;
        document.getElementById('q2a').checked = false;
        document.getElementById('q2b').checked = false;
        document.getElementById('q2c').checked = false;
        document.getElementById('q2d').checked = false;
        document.getElementById('q3a').checked = false;
        document.getElementById('q3b').checked = false;
        document.getElementById('q3c').checked = false;
        document.getElementById('q3d').checked = false;
        document.getElementById('q4a').checked = false;
        document.getElementById('q4b').checked = false;
        document.getElementById('q4c').checked = false;
        document.getElementById('q4d').checked = false;
        document.getElementById('q5a').checked = false;
        document.getElementById('q5b').checked = false;
        document.getElementById('q5c').checked = false;
        document.getElementById('q5d').checked = false;
        document.getElementById('q6a').checked = false;
        document.getElementById('q6b').checked = false;
        document.getElementById('q6c').checked = false;
        document.getElementById('q6d').checked = false;
        document.documentElement.scrollTop = 0;
        showPopUpYes();
    }
});
