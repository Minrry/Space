const questions = [
    {
        question: '1. Как называется слой Солнца, который мы видим?',
        answers: ['Фотосфера', 'Хромосфера', 'Корона', 'Ядро'],
        correctAnswer: 'Фотосфера'
    },
    {
        question: '2. Сколько времени свет от Солнца достигает Земли?',
        answers: ['8 минут', '15 минут', '20 минут', '5 минут'],
        correctAnswer: '8 минут'
    },
    {
        question: '3. Какой элемент является основным в составе Солнца?',
        answers: ['Гелий', 'Кислород', 'Углерод', 'Водород'],
        correctAnswer: 'Водород'
    },
    {
        question: '4. Какая температура на поверхности Солнца?',
        answers: ['5500млн°C', '3500млн°C', '7500млн°C', '15000млн°C'],
        correctAnswer: '15000°C'
    },
    {
        question: '5. Как называется явление, когда Луна полностью закрывает Солнце?',
        answers: ['Лунное затмение', 'Солнечное затмение', 'Транзит', 'Коронация'],
        correctAnswer: 'Солнечное затмение'
    },
    {
        question: '6. Как называется внешняя атмосфера Солнца, видимая во время затмения?',
        answers: ['Хромосфера', 'Корона', 'Фотосфера', 'Ядро'],
        correctAnswer: 'Корона'
    },
    {
        question: '7. Как называется зона, где происходит термоядерный синтез на Солнце?',
        answers: ['Фотосфера', 'Ядро', 'Корона', 'Хромосфера'],
        correctAnswer: 'Ядро'
    },
    {
        question: '8. Какая сила удерживает планеты на орбитах вокруг Солнца?',
        answers: ['Электромагнитная сила', 'Гравитационная сила', 'Центробежная сила', 'Ядерная сила'],
        correctAnswer: 'Гравитационная сила'
    },
    {
        question: '9. Как называется цикл солнечной активности, который длится около 11 лет?',
        answers: ['Солнечный максимум', 'Солнечный минимум', 'Солнечный цикл', 'Солнечная вспышка'],
        correctAnswer: 'Солнечный цикл'
    },
    {
        question: '10. Как называется поток заряженных частиц, исходящих от Солнца?',
        answers: ['Солнечный ветер', 'Космическое излучение', 'Галактический ветер', 'Звездный пылевой поток'],
        correctAnswer: 'Солнечный ветер'
    }
];

let currentQuestionIndex = 0;
let correctCount = 0;
let isAnswering = false;

function startQuiz() {
    // Скрыть описание теста, подвал и блок с кнопкой "Начать"
    document.getElementById('description').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.querySelector('button').style.display = 'none';
    // Показать блок с вопросами
    document.getElementById('quiz').style.display = 'block';
    // Отобразить первый вопрос
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
  // Отобразить текст вопроса и варианты ответов
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
        }, 500);
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
