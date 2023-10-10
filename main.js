const quizData = [
    {
      question: "Moğol imparatorluğunun kurucusu kimdir?",
      a: "Cengizhan",
      b: "Ögeday Han",
      c: "Kubilay Han",
      d: "Möngke Han",
      e: "Arık Böke ",
      correct: "a",
    },
    {
      question: "Türkiye'nin ilk cumhurbaşkanı kimdir?",
      a: "Süleyman Demirel",
      b: "Mustafa Kemal Atatürk",
      c: "Celal Bayar",
      d: "İsmet İnönü",
      e: "Recep Tayyip Erdoğan",
      correct: "b",
    },
    {
      question: "Yüz ölçümü bakımından en büyük ülke hangisidir?",
      a: "Almanya",
      b: "Amerika",
      c: "Çin",
      d: "Rusya",
      e: "Fransa",
      correct: "d",
    },
    {
      question:
        "Sokrates in Savunması, Devlet ve Şölen kitaplarının yazarı kimdir?",
      a: "Newton",
      b: "Aristo",
      c: "Platon",
      d: "Farabi",
      e: "Karl Marks",
      correct: "c",
    },
    {
      question:
        "Geldim Gördüm Yendim anlamına gelen Veni Vidi Vici sözünü hangi hükümdar söylemiştir?",
      a: "w. Churchill",
      b: "Mussolini",
      c: "Adolf Hitler",
      d: "M. Kemal Atatürk",
      e: "Julius Sezar",
      correct: "e",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const e_text = document.getElementById("e_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
  }
  
  function deselectedAnswer() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
  }
  
  function getSelected() {
    let answer;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  let clickCount = 0;
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
  
    clickCount++;
    if (clickCount % 2 === 0) {
      //   console.log(answer);
  
      if (answer) {
        if (answer === quizData[currentQuiz].correct) {
          score++;
        }
        currentQuiz++;
        answerEls.forEach((answerEl) => (answerEl.checked = false));
  
        if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
          quiz.innerHTML = `
          <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
          <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
    
        `;
        }
      }
    }
  });