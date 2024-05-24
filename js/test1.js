// Вопросы теста
const questions = [
    {
        question: '1. Какой планете принадлежит самый крупный спутник в Солнечной системе?',
        answers: ['Нептун', 'Сатурн', 'Юпитер', 'Марс'],
        correctAnswer: 'Юпитер'
    },
    {
        question: '2. Сколько планет в Солнечной системе?',
        answers: ['9', '8', '10', '7'],
        correctAnswer: '8'
    },
    {
        question: '3. Какая планета ближайшая к Солнцу?',
        answers: ['Нептун', 'Сатурн', 'Меркурий', 'Марс'],
        correctAnswer: 'Меркурий'
    },
    {
        question: '4. Как называется область между орбитами Марса и Юпитера, где находятся множество астероидов?',
        answers: ['Карликовый пояс', 'Кольцо Сатурн', 'Пояс астероидов', 'Облако Оорта'],
        correctAnswer: 'Пояс астероидов'
    },
    {
        question: '5. Какой космический объект имеет самый крупный известный кратер в Солнечной системе, названный в честь древнего римского бога войны?',
        answers: ['Нептун', 'Меркурий', 'Юпитер', 'Марс'],
        correctAnswer: 'Меркурий'
    },
    {
        question: '6. Какой спутник планеты Юпитер является самым крупным в Солнечной системе?',
        answers: ['Луна', 'Меркурий', 'Ганимед', 'Марс'],
        correctAnswer: 'Ганимед'
    },
    {
        question: '7. Как называется зона внешней Солнечной системы, где расположены множество карликовых планет и других объектов?',
        answers: ['Пояс Койпера', 'Карликовый пояс', 'Пояс астероидов', 'Облако Оорта'],
        correctAnswer: 'Пояс Койпера'
    },
    {
        question: '8. Какая планета Солнечной системы обладает наибольшим количеством спутников',
        answers: ['Нептун', 'Меркурий', 'Юпитер', 'Марс'],
        correctAnswer: 'Юпитер'
    },
    {
        question: '9. Какой космический объект является самым крупным по массе среди карликовых планет?',
        answers: ['Плутон', 'Макемаке', 'Эрида', 'Хаумеа'],
        correctAnswer: 'Плутон'
    },
    {
        question: '10. Какой космический объект в Солнечной системе обладает самым большим числом колец?',
        answers: ['Нептун', 'Сатурн', 'Юпитер', 'Марс'],
        correctAnswer: 'Сатурн'
    },
    {
        question: '11. Как называется космический объект, который является облаком газа и пыли и обычно имеет хвост?',
        answers: ['Метеороид', 'Комета', 'Астероид', 'Спутник'],
        correctAnswer: 'Комета'
    },
    {
        question: '12. Как называется феномен, при котором видны светящиеся полосы на полярных регионах некоторых планет, включая Землю?',
        answers: ['Солнечное затмение', 'Северное сияние', 'Полярный вихрь', 'Комета'],
        correctAnswer: 'Северное сияние'
    },
    {
        question: '13. Какой космический объект Солнечной системы был первым открытым через телескоп?',
        answers: ['Нептун', 'Сатурн', 'Луна', 'Марс'],
        correctAnswer: 'Сатурн'
    }
];

let currentQuestionIndex = 0;
let correctCount = 0;

function startQuiz() {
    // Показать блок с вопросами
    document.getElementById('quiz').style.display = 'block';

    // Скрыть блок с кнопкой "Начать"
    document.querySelector('button').style.display = 'none';

    // Отобразить первый вопрос
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        ${currentQuestion.answers.map(answer => `
            <input type="radio" name="answer" value="${answer}"> ${answer}<br>
        `).join('')}
    `;

    // Показать кнопку "Следующий вопрос" или "Ответить"
    const actionButton = document.getElementById('actionButton');
    if (currentQuestionIndex < questions.length - 1) {
        actionButton.innerHTML = 'Следующий вопрос';
    } else {
        actionButton.innerHTML = 'Ответить';
    }
    actionButton.style.display = 'block';
}

function performAction() {
    if (currentQuestionIndex < questions.length - 1) {
        nextQuestion();
    } else {
        checkAnswers();
    }
}

function nextQuestion() {
    // Получить выбранный пользователем ответ
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        // Проверить ответ
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer.value === currentQuestion.correctAnswer) {
            correctCount++;
        }

        // Перейти к следующему вопросу
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert('Пожалуйста, выберите ответ.');
    }
}

function checkAnswers() {
    // Подсчет процента правильных ответов
    const percentageCorrect = (correctCount / questions.length) * 100;

    // Отображение результатов в модальном окне
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Вы ответили правильно на ${percentageCorrect.toFixed(1)}% вопросов.`;

    // Показать модальное окно
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    // Скрыть модальное окно
    document.getElementById('modal').style.display = 'none';
}
