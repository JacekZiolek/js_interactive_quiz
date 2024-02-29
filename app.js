const correctAnswers = ["", "B", "A", "AB"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check for correct correct anwers
  userAnswers.forEach((answer, index) => {
    const correctAnswer = correctAnswers[index];
    if (correctAnswer.includes(answer)) {
      score += 25;
    }
  });

  // display result in the browser
  scrollTo(0, 0);
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").innerText = `${output}%`;
    output === score ? clearInterval(timer) : output++;
  }, 20);
});
