let btnRandom = document.querySelector('button');
//creates a variable for the button created in the HTML file

let result = document.querySelector('h2');
//creates a variable for the h1 element in the HTML file


let exercises = ["Dips | 3xF", "Push Ups | 3xF", "Pike Press | 3xF", "Bench Dips | 3xF", "Elevated Pike Press | 3xF", "Decline Push Ups | 3xF", "Elevated Pike Shoulder Shrug | 3xF", "Incline Push Ups | 3xF", "Underhand Inverted Row | 3xF", "Overhand Inverted Row | 3xF", "Good Mornings | 4x10-12", "Supermans | 4x6-8", "Russian Twist | 3xF", "Leg Raises | 4x10-12", "Plank | 3x45s", "Flutter Kicks | 3xF", "Squats | 4x15-20", "Glute Bridges | 4x10-12", "Forward Lunges | 4x10-12 Each Leg", "Wall Sits | 3x45-60 Seconds", "Single Leg Romanian Deadlift | 4x10-12", "Kickbacks | 4x12-15", "Nordic Hamstring Curl | 4x8-10", "Calf Raises | 4x12-15", "Bulgarian Split Squat | 4x10-12", "Jump Squats | 4x12-15"];
//Array of exercises

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    //chooses a random element from the above array

    return result;
}

btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, exercises.length-1); //calls above function and assigns the result to the index variable
    result.innerText = exercises[index]; //changes the h1 text to the chosen index from the array
});

const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
});


