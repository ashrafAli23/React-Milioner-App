import React, { useState } from 'react';
import Question from './components/Question';
import {data , moneyList} from './Data';
import Timer from './components/Timer';
import './App.css';


function App() {
    const [questionNum , setQuestionNum] = useState(1);
    let [stop , setStop] = useState(false);
    return (
        <div className='app'>
            {
                stop ? 
                (<h1 className='endGAme'>game over you earned: $0</h1>) :
                <>
                    <div className='container'>
                        <div className='top'>
                            <div className='timer'>
                                <Timer setStop={ setStop} questionNum = {questionNum} />
                            </div>
                        </div>
                        <div className="bottom">
                            <Question data={data} questionNum={questionNum} setStop={setStop} setQuestionNum={setQuestionNum} />
                        </div>
                    </div>
                    <div className='pyramid'>
                        <ul className='money-list'>
                            { moneyList.map((mon) => {
                                return <li key={mon.id} className={questionNum === mon.id ? 'listItem active': 'listItem'}>
                                    <span className='quenum'>{ mon.id }</span>
                                    <span>{mon.money}</span>
                                </li>
                            }) }
                        </ul>
                    </div>
                </>
            }
        </div>
    )
}

export default App;
