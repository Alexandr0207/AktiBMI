import React from 'react';
import './StartPage.css';
import PropTypes from 'prop-types';
import img from '../img/start.png';
import {NavLink} from 'react-router-dom';
const StartPage = ({gender,growth,weight,inputChange,wantWeight, sub , checkMale, male, female, checkFemale}) => {
    return (
        <div className="root">
            <img src={img} alt="startpage" />
            <h2 className="title">Добро пожаловать в aktiBMI</h2>
            <p className="page">Прежде чем начать, пожалуйста, введите ваши данные</p>
                    <ul className="ul">
                        <li className="li">
                            <p className="p">Пол</p>  
                            {/* <input type='text' name="gender" className="gender" value={gender} onChange={inputChange}/> */}
                            <div className="MF">
                            <button onClick={checkMale} className={male ? 'maleActive' : 'male'}>М</button>
                            <button onClick={checkFemale} className={female ? 'femaleActive' : 'female'}>Ж</button>
                            </div>
                        </li>
                        <li className="li">
                            <p className='p'>Вес</p>
                            <input type="text" name="weight" className="weight" value={weight} onChange={inputChange}/>
                            <p className="units">kg</p>
                        </li>
                        <li className="li">
                            <p className='p'>Желаемый Вес</p>
                            <input type="text" name="wantWeight" className="wantWeight" value={wantWeight} onChange={inputChange}/>
                            <p className="units">kg</p>
                        </li>
                        <li className="li">
                            <p className="p">Рост</p>
                            <input type="text" name="growth" className="growth" value={growth} onChange={inputChange}/>
                            <p className="units">cm</p>
                        </li>
                    </ul>
            <div><NavLink onClick={sub} to='/save' className='but_save'>Сохранить и продолжить</NavLink></div>
        </div>
    );
};

export default StartPage;