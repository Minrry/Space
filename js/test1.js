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
let isAnswering = false;

function startQuiz() {
    // Скрыть описание теста и подвал
    document.getElementById('description').style.display = 'none';
    document.getElementById('footer').style.display = 'none';

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
            <label>
                <input type="radio" name="answer" value="${answer}" onclick="handleAnswerClick(this)"> ${answer}
            </label><br>
        `).join('')}
    `;

    // Показать кнопку "Назад" только если это не первый вопрос
    const prevButton = document.getElementById('prevButton');
    if (currentQuestionIndex > 0) {
        prevButton.style.display = 'inline-block';
    } else {
        prevButton.style.display = 'none';
    }

    // Разблокировать ответы
    isAnswering = true;
}

function handleAnswerClick(selectedAnswer) {
    if (isAnswering) {
        // Заблокировать повторные ответы
        isAnswering = false;

        // Убрать подсветку с предыдущего выбранного ответа
        const previousSelected = document.querySelector('.highlight');
        if (previousSelected) {
            previousSelected.classList.remove('highlight');
        }

        // Подсветить текущий выбранный ответ
        selectedAnswer.parentElement.classList.add('highlight');

        // Пауза перед переходом на следующий вопрос
        setTimeout(() => {
            performAction(selectedAnswer);
        }, 1000);
    }
}

function performAction(selectedAnswer) {
    // Проверить ответ
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer.value === currentQuestion.correctAnswer) {
        correctCount++;
    }

    // Перейти к следующему вопросу
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        checkAnswers();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function checkAnswers() {
    // Подсчет количества правильных ответов
    const correctAnswers = correctCount;

    // Отображение результатов в модальном окне
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Вы ответили правильно на ${correctAnswers} из ${questions.length} вопросов.`;

    // Показать модальное окно
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    // Скрыть модальное окно
    document.getElementById('modal').style.display = 'none';
}

// Обработчик выбора ответа
document.addEventListener('change', function(event) {
    if (event.target.name === 'answer') {
        handleAnswerClick(event.target);
    }
});
