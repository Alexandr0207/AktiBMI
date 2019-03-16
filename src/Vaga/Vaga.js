import React from 'react';
import './Vaga.css';
import ReactSpeedometer from "react-d3-speedometer"
const Vaga = ({weight, growth,wantWeight,date,resultSub, male}) => {
    return (
        <div className="root_vaga">
            <div className='vaga_now'>
              <p>{`Пол: ${male ? 'Мужской' : 'Женский'}`}</p>
              <p className="vaga_title_now_weight">Текущий вес:</p>
              <p className="vaga_now_weight">{weight} <span>kg</span></p>
              <p>{date}</p>
            </div>
            
            <div className="vaga_desired">
                <p className='vaga_title_desired_weight'>Желаемый вес:</p>
                <p className='vaga_desired_weight'>{wantWeight}<span>kg</span></p> 
                <p>{`Разница ${resultSub} кг`}</p>   
                
            </div> 
            
            <div className="speedometer">
                   <ReactSpeedometer
                        maxValue={50}
                        value={+(weight/((growth/100)*(growth/100))).toFixed(2)}
                        needleColor="red"
                        startColor="green"
                        segments={10}
                        endColor="red"
                    />
            </div>

        </div>
    );
};

export default Vaga;