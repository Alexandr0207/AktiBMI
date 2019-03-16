import React from 'react';
import './StartPage.css';
import PropTypes from 'prop-types';
import img from '../img/start.png';
import {NavLink} from 'react-router-dom';
const StartPage = ({gender,growth,weight,inputChange,wantWeight, sub , checkMale, male, female, checkFemale}) => {
    return (
        <div className="root">
            {/* <img src={img} alt="startpage" /> */}
            <h2 className="titley">Добро пожаловать в aktiBMI</h2>
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
                        <p className="p">Вес</p>
                        <div className="MF">  
                            <input type="text" className="input" name="weight" placeholder="0 кг" value={`${weight}`} onChange={inputChange}/>
                            </div>
                            {/* <p className="units">kg</p> */}
                        </li>
                        <li className="li">
                        <p className="p">Желаемый вес</p>  
                            <input type="text" className="input" name="wantWeight" value={wantWeight} placeholder="0 кг" onChange={inputChange}/>
                            {/* <p className="units">kg</p> */}
                        </li>
                        <li className="li">
                        <p className="p">Рост</p>  
                            <input type="text" className="input" name="growth" value={growth} placeholder="0 см" onChange={inputChange}/>
                            {/* <p className="units">cm</p> */}
                        </li>
                    </ul>
            <div><NavLink onClick={sub} to='/save' className='but_save'>Сохранить и продолжить</NavLink></div>
        </div>
    );
};

export default StartPage;