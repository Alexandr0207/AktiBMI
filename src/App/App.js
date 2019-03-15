import React, { Component } from 'react';
import './App.css';
import StartPage from '../StartPage/StartPage.jsx';
import Menu from '../Menu/Menu';
import {Switch, Route} from 'react-router-dom';
import Vaga from '../Vaga/Vaga';
import moment from 'moment';
class App extends Component {
  state={
    gender: '',
    male: JSON.parse(localStorage.getItem('male')) || false,
    female: JSON.parse(localStorage.getItem('female')) || false,
    growth: JSON.parse(localStorage.getItem('growth')) || '',
    weight: JSON.parse(localStorage.getItem('weight')) || '',
    wantWeight: JSON.parse(localStorage.getItem('wantWeight')) || '',
    date: '',
    resultSub: JSON.parse(localStorage.getItem('resultSub')) || 0,

  }
  
  componentDidMount(){
    this.time();
  }

  inputChange = async (e) =>{
      // console.log(e.target.name);
    let value=e.target.value;
    let name=e.target.name;
    await this.setState({
        [name]: value,
    })
    localStorage.setItem('weight', JSON.stringify(this.state.weight));
    localStorage.setItem('wantWeight', JSON.stringify(this.state.wantWeight));
    localStorage.setItem('growth', JSON.stringify(this.state.growth));
  }
  time = () => {
    setInterval(()=>{
      let getTime=moment().format('L');
      this.setState({
        date: getTime,
      })
    }, 0)
  }
  sub = async () => {
    await this.setState({
      resultSub: this.state.weight - this.state.wantWeight,
    })
    localStorage.setItem('resultSub', JSON.stringify(this.state.resultSub));
  }

  checkMale = async() => {
    await this.setState({
      male: true,
      female: false
    })
    localStorage.setItem('male', JSON.stringify(this.state.male));
    // let result = JSON.parse(localStorage.getItem('favorList')) || []
    // result.push(list);
    // localStorage.setItem('favorList', JSON.stringify(result));
  }

  checkFemale = async() => {
    await this.setState({
      female: true,
      male: false
    })
    localStorage.setItem('female', JSON.stringify(this.state.female));
  }

  render() {
    const{gender,growth,weight,wantWeight,date,resultSub, male, female}=this.state;
    // console.log(date);
    return (
      <div className="App">
        
        {/* <Menu/> */}
        <Switch>
            <Route exact path="/" render={() =>
            <StartPage 
            gender={gender} 
            growth={growth} 
            weight={weight}
            sub={this.sub}
            checkMale={this.checkMale}
            checkFemale={this.checkFemale}
            female={female}
            male={male}
            inputChange={this.inputChange}/>}/>
            <Route path="/save" render={ (props) => 
            <Menu  
            growth={growth} 
            weight={weight} 
            wantWeight={wantWeight} 
            date={date} 
            resultSub={resultSub}
            male={male}
            {...props}

            />}/>

           
        </Switch>
        {/* <Vaga growth={growth} weight={weight}/> */}
      </div>
    );
  }
}

export default App;