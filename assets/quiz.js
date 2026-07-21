// Reusable quiz widget for the teaching workspace.
// Markup contract per .quiz block:
// <div class="quiz" data-answer="B">
//   <p class="quiz-question">...</p>
//   <div class="quiz-options">
//     <button class="quiz-option" data-key="A" data-explain="...">...</button>
//     <button class="quiz-option" data-key="B" data-explain="...">...</button>
//   </div>
//   <p class="quiz-feedback" hidden></p>
// </div>
document.addEventListener("click", (event) => {
  const button = event.target.closest(".quiz-option");
  if (!button) return;

  const quiz = button.closest(".quiz");
  if (!quiz || quiz.classList.contains("answered")) return;
  quiz.classList.add("answered");

  const correctKey = quiz.dataset.answer;
  const isCorrect = button.dataset.key === correctKey;

  quiz.querySelectorAll(".quiz-option").forEach((option) => {
    option.disabled = true;
    if (option.dataset.key === correctKey) option.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("incorrect");

  const feedback = quiz.querySelector(".quiz-feedback");
  if (feedback) {
    feedback.hidden = false;
    feedback.textContent =
      button.dataset.explain ||
      (isCorrect ? "Esatto." : "Non esatto — rivedi la sezione sopra.");
    feedback.classList.add(isCorrect ? "correct-msg" : "wrong-msg");
  }
});
