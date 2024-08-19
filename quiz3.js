let questions = [   
    {
        question: "Which brand is known for its iconic logo featuring a crocodile?",
        choice1: "Puma",
        choice2: "Adidas",
        choice3: "Lacoste",
        choice4: "Nike",
        answer: 3,
    },
    {
        question: "Which fashion brand is famous for its 'Three Stripes' logo?",
        choice1: "Nike",
        choice2: "Adidas",
        choice3: "Puma",
        choice4: "Under Armour",
        answer: 2,
    },
    {
        question: "Which luxury brand is known for its 'Rolex' watches?",
        choice1: "Omega",
        choice2: "Tag Heuer",
        choice3: "Rolex",
        choice4: "Cartier",
        answer: 3,
    },
    {
        question: "Which fashion house is known for its 'GG' monogram?",
        choice1: "Gucci",
        choice2: "Chanel",
        choice3: "Louis Vuitton",
        choice4: "Prada",
        answer: 1,
    },
    {
        question: "Which brand is known for its red-soled shoes?",
        choice1: "Christian Louboutin",
        choice2: "Jimmy Choo",
        choice3: "Manolo Blahnik",
        choice4: "Salvatore Ferragamo",
        answer: 1,
    },
    {
        question: "Which brand is famous for its 'Just Do It' slogan?",
        choice1: "Puma",
        choice2: "Nike",
        choice3: "Reebok",
        choice4: "Adidas",
        answer: 2,
    },
    {
        question: "Which designer brand is known for its 'Tiffany Blue' color?",
        choice1: "Tiffany & Co.",
        choice2: "Cartier",
        choice3: "Van Cleef & Arpels",
        choice4: "Harry Winston",
        answer: 1,
    },
    {
        question: "Which fashion brand is known for its 'LV' monogram?",
        choice1: "Gucci",
        choice2: "Louis Vuitton",
        choice3: "Chanel",
        choice4: "Hermès",
        answer: 2,
    },
    {
        question: "Which company is known for its 'Puma' logo featuring a leaping puma?",
        choice1: "Adidas",
        choice2: "Puma",
        choice3: "Nike",
        choice4: "Reebok",
        answer: 2,
    },
    {
        question: "Which fashion brand is known for its luxury leather goods and 'H' logo?",
        choice1: "Hermès",
        choice2: "Prada",
        choice3: "Gucci",
        choice4: "Chanel",
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