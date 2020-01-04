import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import * as serviceWorker from './serviceWorker';
import foodData from './foodData/foodData.json';
import Question from './components/Question';
import HighScores from './components/HighScores';
import NameSubmitForm from './components/NameSubmitForm';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';


class FoodApp extends Component {

	constructor(props){
		let randomFoodData = foodData
		for (let i = randomFoodData.length - 1; i > 0; i--) {
		        const j = Math.floor(Math.random() * (i + 1));
		        [randomFoodData[i], randomFoodData[j]] = [randomFoodData[j], randomFoodData[i]];
		}
		super(props);
		
		this.state = {
				foodBank: randomFoodData,
				correctAnswers: 0,
				totalAnswers: 0,
				submittedScore:false,
				goNext:false
		}
		// console.log(this.state.foodBank[0].food)
		this.createQuiz = this.createQuiz.bind(this);
		this.render = this.render.bind(this);
	}


	saySomething = (chosenValue,correctValue) => {
		if (chosenValue == correctValue){
				this.setState({
					correctAnswers : this.state.correctAnswers+1,
					totalAnswers : this.state.totalAnswers+1
				})
			} else {
				this.setState({
					totalAnswers : this.state.totalAnswers+1
				})
			}
			if(this.state.totalAnswers==9) {
				console.log('it is 10')
				document.getElementById('go-next').setAttribute('style','display:block;margin-top:20px;background-color:blue')
			} else {
				console.log(this.state.totalAnswers)
			}
			console.log('finished updating parent state to ' + this.state.totalAnswers)
	}

	createQuiz = () => {
		let children=[]
		for (let i=0;i<20;i=i+2){
			children.push(
				<Question 
				key={i}
				start={i}
				foodBank={this.state.foodBank}
				selected={(food,correctFood) => this.saySomething(food,correctFood)} />
				)
		}
		return children
	}

	resetGame = () => {
		let randomFoodData = foodData
		for (let i = randomFoodData.length - 1; i > 0; i--) {
		        const j = Math.floor(Math.random() * (i + 1));
		        [randomFoodData[i], randomFoodData[j]] = [randomFoodData[j], randomFoodData[i]];
		}
		
		this.setState({
				foodBank: randomFoodData,
				correctAnswers: 0,
				totalAnswers: 0,
				submittedScore:false
		});
	}

	render() {
		if (this.state.totalAnswers<10 || this.state.goNext==false){
			return ( 
				<React.Fragment>
				<div className='top-link'><a className='site-link' href='http://www.samslezek.com'>Go Back to Sam's Website</a></div>
				<div className='container'>
					    <h1>Food Trivia</h1>
    					<p><em>Pick the more popular food, as defined by % of Instacart orders containing that food. </em></p>
					{this.createQuiz()}
					<button id='go-next' onClick={() => this.setState({goNext:true})}>Finish</button>
				</div>
				</React.Fragment>
				)
			}
			else if (this.state.submittedScore==false){
				return ( 
				<React.Fragment>
				<div className='top-link'><a className='site-link' href='http://www.samslezek.com'>Go Back to Sam's Website</a></div>	
				<div className='container'>
    <h1>Food Trivia</h1>
    <h3>Results</h3>
    <p>You got <strong>{this.state.correctAnswers}/{this.state.totalAnswers}</strong> questions correct. You can submit your name to the High Scores list.</p>
					<NameSubmitForm currentScore={this.state.correctAnswers} submitscore={() => this.setState({submittedScore:true})} resetfunc={() => {this.resetGame()}} />
					<HighScores />
				</div>
				</React.Fragment>
				)
			}
			return (
			<React.Fragment>
				<div className='top-link'><a className='site-link' href='http://www.samslezek.com'>Go Back to Sam's Website</a></div>
				<div className='container'>
				<HighScores key={this.state.submittedScore} />
				<button className='play-again-solo' onClick={() => {this.resetGame()}}>Play Again</button>
				</div>
			</React.Fragment>);
		
	}
}

ReactDOM.render(<FoodApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
