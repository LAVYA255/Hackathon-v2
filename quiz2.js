let questions = [   
    {
        question: "Who is considered the father of the modern computer?",
        choice1: "Alan Turing",
        choice2: "Charles Babbage",
        choice3: "Ada Lovelace",
        choice4: "John von Neumann",
        answer: 2,
    },
    {
        question: "Which company developed the first commercially successful microprocessor?",
        choice1: "Intel",
        choice2: "AMD",
        choice3: "IBM",
        choice4: "Apple",
        answer: 1,
    },
    {
        question: "What does the acronym 'HTTP' stand for?",
        choice1: "Hypertext Transfer Protocol",
        choice2: "Hypertext Transmission Protocol",
        choice3: "High Transfer Text Protocol",
        choice4: "Hyperlink Transfer Protocol",
        answer: 1,
    },
    {
        question: "Which programming language was created by Guido van Rossum?",
        choice1: "Java",
        choice2: "Python",
        choice3: "Ruby",
        choice4: "C++",
        answer: 2,
    },
    {
        question: "What is the primary function of an operating system?",
        choice1: "Manage hardware resources",
        choice2: "Develop software applications",
        choice3: "Browse the internet",
        choice4: "Execute graphics",
        answer: 1,
    },
    {
        question: "Which company is known for the Android operating system?",
        choice1: "Microsoft",
        choice2: "Google",
        choice3: "Apple",
        choice4: "Samsung",
        answer: 2,
    },
    {
        question: "What does 'URL' stand for?",
        choice1: "Uniform Resource Locator",
        choice2: "Universal Resource Locator",
        choice3: "Uniform Resource Link",
        choice4: "Universal Resource Link",
        answer: 1,
    },
    {
        question: "In computing, what does 'RAM' stand for?",
        choice1: "Random Access Memory",
        choice2: "Read Access Memory",
        choice3: "Rapid Access Memory",
        choice4: "Random Allocation Memory",
        answer: 1,
    },
    {
        question: "Which company was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne?",
        choice1: "Apple",
        choice2: "Microsoft",
        choice3: "Google",
        choice4: "IBM",
        answer: 1,
    },
    {
        question: "What is the name of the protocol used for secure data transmission over the internet?",
        choice1: "HTTP",
        choice2: "FTP",
        choice3: "HTTPS",
        choice4: "SMTP",
        answer: 3,
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