import React, { useEffect, useState } from 'react'

function Question({questionNum , data ,setStop , setQuestionNum}) {

    let [Ques , setQues] = useState(null);
    let [selectedAnswer , setSelectedAnswer] = useState(null);
    let [ClassName , setClassName] = useState("");
    
    useEffect(() => {
        setQues(data[questionNum + Math.floor((Math.random() * 9))]);
    },[data , questionNum])

    const delay = (duration , callback) => {
        setTimeout(() => {
            callback();
        } , duration);
    }

    let handleCLick = (item) => {
        setSelectedAnswer(item);
        setClassName("active");
        delay(3000 , ()=> {
            setClassName(item.correct ? 'correct' : 'wrong');
        })
        delay(6000 , ()=> {
            if(item.correct === true){
                setQuestionNum(PreValue => PreValue + 1 );
                setSelectedAnswer(null);
            }else {
                setStop(true);
            }
        })
    }
    return (
        
        <div className='quest'>
            <div className="main-que">{ Ques?.question }</div>
            <div className='awnser'>
                { Ques?.answers.map((item , index) => {
                    return(
                        <span className={selectedAnswer === item ? ClassName : "" } key={index} onClick={() => handleCLick(item)} >
                            {item.text}
                        </span>
                    )
                }) }
            </div>
        </div>
    )
}

export default Question;
