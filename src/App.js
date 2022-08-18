import { useState } from 'react';
import './App.css';
import './index.css'


function App() {

  const question = [
    {
      questionText: 'Хто йобнув крейсер москва?',
      answerOptions: [
        { answeText: 'Я', isCorrect: false },
        { answeText: 'Нептун', isCorrect: true },
        { answeText: 'Гарпун', isCorrect: false },
        { answeText: 'Азіат', isCorrect: false },
      ]
    },
    {
      questionText: 'Хто такій бандера?',
      answerOptions: [
        { answeText: 'Я', isCorrect: false },
        { answeText: 'Голова УПА', isCorrect: true },
        { answeText: 'Хз', isCorrect: false },
        { answeText: 'Створив УПА', isCorrect: false },
      ]
    },
    {
      questionText: 'Хто 8 років бамбил бамбас?',
      answerOptions: [
        { answeText: 'Я', isCorrect: true },
        { answeText: 'Бандера', isCorrect: false },
        { answeText: 'Зеленській', isCorrect: false },
        { answeText: 'Порох', isCorrect: false },
      ]
    },
    {
      questionText: 'Чій крим',
      answerOptions: [
        { answeText: 'Наш', isCorrect: true },
        { answeText: 'Український', isCorrect: true },
        { answeText: 'Туреччини', isCorrect: false },
        { answeText: 'Кримчан', isCorrect: false },
      ]
    },
  ]

  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [show, setShow] = useState(false)


  const answerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuetion = current + 1

    if (nextQuetion < question.length) {
      setCurrent(nextQuetion)
    } else {
      setShow(true)
    }
  }

  const refresh = () => {
    setCurrent(0)
    setScore(0)
    setShow(false)
  }



  return (
    <div>
      <div className="app">

        {
          show
            ? <div className="section-scroe">
              <div><span>Правильних відповідей</span>{score} з {question.length}</div>
              <button
                className='refresh__btn'
                onClick={refresh}
              >Спробувати знову...</button>
              {
                score <= 2
                  ? <h4>Схоже,ти москаль але ти можеш спробувати знову!</h4>
                  : <h4>Ти справжній Українець!</h4>
              }
            </div>
            : <div className="quizz">
              <div className="question-section">
                <div className="question-count">
                  <span>Питання {current + 1}</span> / {question.length}
                </div>
                <div className="question-text">{question[current].questionText}</div>
                <img src="./icons.png" alt="" />
              </div>
              <div className="answer__section">
                {question[current].answerOptions.map((item) => (
                  <button onClick={() => answerClick(item.isCorrect)}>{item.answeText}</button>
                ))}
              </div>
            </div>
        }
      </div>
      <footer>Created by Alex Martiunyk ©</footer>
    </div>

  );
}


export default App;
