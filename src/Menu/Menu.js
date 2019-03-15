import React from 'react';
import styles from './Menu.module.css';
import Header from '../Header/Header';
import {NavLink} from 'react-router-dom';
import Vaga from '../Vaga/Vaga';
import History from '../History/History';
import {Switch, Route} from 'react-router-dom';
const Menu = ({growth,weight,match,wantWeight,date,resultSub, male}) => {
    // console.log(match.path);
    return (
        <div className="menu">
            <Header/>
           <ul className={styles.ul}>
              <NavLink className={styles.but_vaga} to={`${match.path}/`}>Vaga</NavLink>
              <NavLink className={styles.but_history} to={`${match.path}/history`}>History</NavLink>
           </ul>
           <Switch>
            <Route exact path={`${match.path}/`} render={() =>
            <Vaga 
            growth={growth} 
            weight={weight}
            wantWeight={wantWeight}
            date={date}
            male={male}
            resultSub={resultSub
            }/>}/>
            <Route path="/history" render={ () => 
            <History />}/>
            </Switch>
           {/* <Vaga growth={growth} weight={weight} wantWeight={wantWeight}/> */}
           </div>
    );
};

export default Menu;