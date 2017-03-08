// Required dependencies
// import from package name
import React from 'react';

// pull in 'something' from the react-dom { only used when you render the component directly into you html file }
import { render } from 'react-dom';

// import your header component
import { Header } from './components/Header'

// import your home component
import { Home } from './components/Home'

// Create your root component
class App extends React.Component {
	// Set a new initial state
	constructor() {
		super()
		this.state = {
			homeLink: 'Home',
			homeMounted: true
		}
	}

	// Add a method to pass a component from App into the Home component
	onGreet() {
		alert( 'Hello!' )
	}

	// new method with the argument of newName
	onChangeLinkName( newName ) {
		this.setState({
			homeLink: newName
		})
	}

	onChangeHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted
		})
	}

	// this method needs to return what will be rendered
	render()  { 
		let homeCmp = ''
		if ( this.state.homeMounted ) {
			homeCmp = (
				<Home name = { 'Max' } 
						initialAge = { 27 } 
						greet = { this.onGreet }
						changeLink = { this.onChangeLinkName.bind( this ) }
						initialLinkName = { this.state.homeLink }
				/>
			)
		}
		return (
			<div className = 'container'> 
				<div className = 'row'>
					<div className =' col-xs-10 col-xs-offset-1'>
						<Header homeLink = { this.state.homeLink }/>
					</div>
				</div>
				<div className = 'row'>
					<div className = 'col-xs-10 col-xs-offset-1'>
						{ homeCmp }
					</div>
				</div>
				<div className = 'row'>
					<div className = 'col-xs-10 col-xs-offset-1'>
						<button onClick={ this.onChangeHomeMounted.bind( this )} className='btn btn-primary'> (Un)mount Home component </button>
					</div>
				</div>
			</div>
		)
	}
}

// tell react which component and where you want to render it
render(<App/>, window.document.getElementById( 'app' ));


// in video #6 the code looked like this:

// Create your root component
// class App extends React.Component {
// 	// this method needs to return what will be rendered
// 	render()  { 
// 		let user = {
// 			name: 'Tom',
// 			hobbies: ['Music', 'Reading']
// 		}
// 		return (
// 			<div className='container'> 
// 				<div className='row'>
// 					<div className='col-xs-10 col-xs-offset-1'>
// 						<Header/>
// 					</div>
// 				</div>
// 				<div className='row'>
// 					<div className='col-xs-10 col-xs-offset-1'>
// 						<Home name={'Max'} age={27} user={user}>
// 							<p>This is a paragraph!</p>
// 						</Home>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }
