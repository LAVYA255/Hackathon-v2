let questions = [   
    {
        question: "Who founded the Ford Motor Company?",
        choice1: "Henry Ford",
        choice2: "Karl Benz",
        choice3: "Enzo Ferrari",
        choice4: "Ferdinand Porsche",
answer: 1,
    },
    {
        question: "Which car brand is known for the model 'Civic'?",
        choice1: "Toyota",
        choice2: "Honda",
        choice3: "Nissan",
        choice4: "Hyundai",
answer: 2,
    },
    {
        question: "What was the first mass-produced car in history?",

choice1: "Ford Model T",
choice2: "Mercedes-Benz Patent Motorwagen",
choice3: "Cadillac Model A",
choice4: "Peugeot Type 3",
answer: 1,
    },
    {
        question: "Which car manufacturer is associated with the luxury brand 'Lexus'?",

        choice1: "Nissan",
        choice2: "Toyota",
        choice3: "BMW",
        choice4: "Audi",
        answer: 2,
    },
    {
        question: "What is the name of Ferrari’s iconic sports car model introduced in 1964?",

        choice1: "Ferrari 308",
        choice2: "Ferrari Testarossa",
        choice3: "Ferrari 250 GTO",
        choice4: "Ferrari F40",
        answer: 3,
    },
    {
        question: "Which company is known for the 'Beetle' model?",

choice1: "Volkswagen",
choice2: "BMW",
choice3: "Ford",
choice4: "Audi",
answer: 1,
    },
    {
        question: "Which American car brand is known for producing the 'Silver Ghost' model?",

        choice1: "Cadillac",
        choice2: "Rolls-Royce",
        choice3: "Lincoln",
        choice4: "Chrysler",
        answer: 2,
    },
    {
        question: "In which country was the car manufacturer Mercedes-Benz founded?",

choice1: "Germany",
choice2: "France",
choice3: "Italy",
choice4: "England",
answer: 1,
    },
    {
        question: "Which company introduced the first hybrid car, the Prius?",

choice1: "Honda",
choice2: "Toyota",
choice3: "Nissan",
choice4: "Ford",
answer: 2,
    },
    {
        question: "Which car brand’s logo features a prancing horse?",

        choice1: "Ferrari",
        choice2: "Maserati",
        choice3: "Lamborghini",
        choice4: "Porsche",
        answer: 1,   
    }
 ];
 
let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.question;
    document.getElementById('option-text1').innerText = question.choice1;
    document.getElementById('option-text2').innerText = question.choice2;
    document.getElementById('option-text3').innerText = question.choice3;
    document.getElementById('option-text4').innerText = question.choice4;
    document.querySelector('.question').classList.remove('answered');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
let options = document.getElementsByClassName('option');
for (let i = 0; i < options.length; i++) {
    
    options[i].addEventListener('click', function() {
        if (options[i].parentElement.parentElement.classList.contains("answered")) {
            return;
        }

        options[i].parentElement.parentElement.classList.add("answered");
        let selectedOption = this.id;
        let correctOption = 'option' + questions[currentQuestionIndex].answer;

        if (selectedOption === correctOption) {
            this.classList.add('correct');
        } else {
            this.classList.add('incorrect');
        }
        
        let numVal = document.querySelector('.num-val');
        numVal.innerText = parseInt(numVal.innerText.split('/')[0]) + 1 + '/10';

        
        if (this.classList.contains('correct')) {
            let scoreVal = document.querySelector('.score-val');
            scoreVal.innerText = parseInt(scoreVal.innerText) + 10;
        }
        
        
        let progressBar = document.getElementById('progress-bar');
        progressBar.value = parseInt(progressBar.value) + 1;
        
        
        setTimeout(function() {
            
            options[i].classList.remove('correct', 'incorrect');

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                
                let endScreen = document.getElementById('end-screen');
                let finalScore = document.getElementById('final-score');
                finalScore.innerText = document.querySelector('.score-val').innerText;
                endScreen.classList.remove('hidden');
            }
        },800); 

        let playAgainButton = document.getElementById('play-again');
        let goHomeButton = document.getElementById('go-home');

        playAgainButton.addEventListener('click', function() {
            
            document.getElementById('end-screen').classList.add('hidden');

            
            currentQuestionIndex = 0;
            document.querySelector('.score-val').innerText = '0';
            document.getElementById('progress-bar').value = 0;
            document.querySelector('.num-val').textContent = '0/10'; 
           
            
            displayQuestion();
        });

        goHomeButton.addEventListener('click', function() {
            
            window.location.href = 'index.html'; 
        });
    });

    
}


shuffleArray(questions);
displayQuestion();