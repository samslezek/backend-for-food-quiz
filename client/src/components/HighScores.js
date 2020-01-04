import React, { Component } from 'react';

class HighScores extends Component {
	
	state = {
		highscores: []
	};

	constructor(props) {
	super(props)
	var delayInMilliseconds = 100; //1 second
	setTimeout(() => {
	  fetch('/react')
	      .then(res => res.json())
	      .then(users => this.setState({highscores:users}));
	  }, delayInMilliseconds);
	}

    

	render = (props) => {
		return (
			<React.Fragment>
				<h3>High Scores</h3>
				<table id="highscores">
					<tr>
						<th>Name</th>
						<th>Score</th>
					</tr>
					{this.state.highscores.map(
				 	({name,score}) => ( 
				 	<React.Fragment>
				 	<tr>
					<td>{name}</td>
					<td>{score}/10</td>
					</tr>
					</React.Fragment>
					 ))}
    	</table>
			</React.Fragment>


			// <React.Fragment>
			// 	<h3>High Scores</h3>
			// 	<ul>
				
			// 	</ul>
	    // <table className="table table-striped custab ordered">
	    // <thead>
	    //     <tr>
	    //         <th className='left'>&nbsp; &nbsp; &nbsp; Name</th>
	    //         <th className='center'>Score</th>
	    //     </tr>
	    // </thead>
	    // 		{this.state.highscores.map(
			// 	 	({name,score}) => ( 
			// 	 	<React.Fragment>
			// 	 	<tr>
			// 		<td className='high-score left'>&nbsp; {name}</td>
			// 		<td className='center'>{score}</td>
			// 		</tr>
			// 		</React.Fragment>
			// 		 ))}
	    // </table>
			// </React.Fragment>
			)
	}
}
export default HighScores