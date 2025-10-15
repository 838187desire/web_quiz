document.addEventListener('DOMContentLoaded', () => {
    const questionsGrid = document.getElementById('questionsGrid');
    const mainHeading = document.getElementById('main-heading');

    // Set the main heading from the first item in the data array
    if (questions.length > 0 && questions[0].topHeading) {
        mainHeading.textContent = questions[0].topHeading.replace('quiz_no.', ''); // Clean up the placeholder
    }

    // Filter out the heading object and create quiz cards for the rest
    const quizData = questions.filter(item => item.question);

    quizData.forEach((data, index) => {
        const questionNumber = index + 1;
        const correctAnswerObj = data.answers.find(ans => ans.correct);
        const correctAnswerText = correctAnswerObj ? correctAnswerObj.text : '';

        let optionsHtml = '';
        data.answers.forEach(answer => {
            optionsHtml += `
                <label class="option">
                    <input type="radio" name="q${questionNumber}" value="${answer.text}">
                    <span class="opt-text">${answer.text}</span>
                </label>
            `;
        });

        const article = document.createElement('article');
        article.className = 'card';
        article.innerHTML = `
            <div class="q-head">
                <div class="q-text">${data.question}</div>
            </div>
            <div class="options" role="radiogroup" aria-label="विकल्प">
                ${optionsHtml}
            </div>
            <div class="actions">
                <button class="btn" data-action="reveal">उत्तर दिखाएँ</button>
                <button class="btn ghost" data-action="toggleSelect">सही को हाइलाइट करें</button>
            </div>
            <div class="answer-area" aria-hidden="true" data-answer="${correctAnswerText}">
                <div class="correct">उत्तर: <span class="ans-text">${correctAnswerText}</span></div>
                <div class="explain"><span class="exp-text">${data.Explanation}</span></div>
            </div>
        `;
        questionsGrid.appendChild(article);
    });

    // --- Event Listeners ---
    const revealAllBtn = document.getElementById('revealAll');
    const hideAllBtn = document.getElementById('hideAll');

    revealAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.answer-area').forEach(area => area.classList.add('show'));
    });

    hideAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.answer-area').forEach(area => area.classList.remove('show'));
        document.querySelectorAll('.option.highlight-correct').forEach(opt => opt.classList.remove('highlight-correct'));
    });

    questionsGrid.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        if (!action) return;

        const card = e.target.closest('.card');
        if (!card) return;

        if (action === 'reveal') {
            card.querySelector('.answer-area').classList.toggle('show');
        }

        if (action === 'toggleSelect') {
            const answerArea = card.querySelector('.answer-area');
            const correctAnswer = answerArea.dataset.answer;
            const correctOption = Array.from(card.querySelectorAll('.option')).find(opt => {
                const optText = opt.querySelector('.opt-text');
                return optText && optText.textContent === correctAnswer;
            });

            if (correctOption) {
                 correctOption.classList.toggle('highlight-correct');
            }
        }
    });
});