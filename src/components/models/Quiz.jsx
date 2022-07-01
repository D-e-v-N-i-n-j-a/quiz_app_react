import React, { useState, useEffect } from "react";
import Question from "../quize/Question";
const Quiz = () => {
  const [currentQuestion, setQuestion] = useState(0);
  const [seconds, setSeconds] = useState(15);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState(0);
  var timer;
  function setNextQuestion(isCorrect) {
    //UPDATE SCORE IF USER GET THE RIGHT ANSWER
    if (isCorrect === true) {
      setScores(scores + 1);
    }

    const nextQuestion = currentQuestion + 1;
    // SET NEXT QUESTION
    setQuestion(nextQuestion);
    setSeconds(15);
    //INCREASE QUESTION INDEX
    setQuestionIndex(questionIndex + 1);
  }

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0 && questionIndex < Question.length) {
        setQuestionIndex(questionIndex + 1);
        setNextQuestion("");
        setSeconds(15);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  function repeatQuestion(){
    setQuestionIndex(0)
    setQuestion(0)
    setScores(0)
    setSeconds(15)
  }
  return (
    <div className="quiz__container__section">
      {questionIndex === Question.length ? (
        ""
      ) : (
        <div className="question__headers">
          <span>
            {questionIndex + 1}/{Question.length}
          </span>
          <span>Time left : 0:{seconds}</span>
        </div>
      )}
      {questionIndex === Question.length ? (
        <div className="result__container">
          <h4>
            You Scored {scores} out of {Question.length}
          </h4>
          <button className="btn" onClick={()=>{repeatQuestion()}}>Repeat</button>
        </div>
      ) : (
        <div className="Quiz__Section">
          <div className="question__section">
            <span>{Question[currentQuestion].question}</span>
          </div>
          <div className="possible__answers">
            {Question[currentQuestion].options.map((option, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setNextQuestion(option.isCorrect);
                  }}
                >
                  {option.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
