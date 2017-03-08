// Required dependencies
// import from package name
import React from 'react'

// create your component and make it available for export
export class Home extends React.Component {
	// 
	constructor( props ) {
		// Needs to be called to execute the parent constructor
		super()
		// create a new prop this.age { property created inside the Home component } || props.age { age passed into this component from outside }
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName
		}
		setTimeout(() => {
			this.setState({
				status: 1
			})
		}, 3000)
		console.log( 'constructor' )
	}

	// Methods of life cycle 1 - 7
	componentWillMount() {
		console.log( 'Component will mount' )
	}

	componentDidMount() {
		console.log( 'Component did mount!' )
	}

	componentWillReceiveProps( nextProps ) {
		console.log( 'Component will receive props', nextProps )
	}

	shouldComponentUpdate( nextProps, nextState ) {
		console.log( 'Should component update', nextProps, nextState )
		return true
	}

	componentWillUpdate( nextProps, nextState ) {
		console.log( 'Component will update', nextProps, nextState )
	}

	componentDidUpdate( prevProps, prevState ) {
		console.log( 'Component did update', prevProps, prevState )
	}

	componentWillUnmount() {
		console.log( 'Component will unmount' )
	}




	// method to change state and make something happen after the button is clicked
	onMakeOlder() {
		this.setState({
			// set whatever you want to change { this will trigger a UI update }
			age: this.state.age + 3
		})
	}

	// new method/function is outsourced to make it easier to read
	onChangeLink() {
		this.props.changeLink( this.state.homeLink )
	}

	// Do something when the user types in the input field
	// Event target = the input field || value = the input
	onHandleChange( event ) {
		this.setState({
			homeLink: event.target.value
		})
	}

	// Define what gets rendered
	render() {
		// you can access the props through or output the data in a new component
		// console.log(this.props)
		return (
			<div>		
				<p> Your name is { this.props.name }, and you are { this.state.age } years old </p>
				<p> I am a new component!</p>
				<hr/>
				<button onClick = { () => this.onMakeOlder() } className='btn btn-primary'> Make me older </button>
				<p> Status: { this.state.status }</p>
				<hr/>
				<button onClick = { this.props.greet } className='btn btn-primary'> Greet </button>
				<hr/>
				<input type = 'text' value = { this.state.homeLink } 
				onChange = { ( event ) => this.onHandleChange( event ) }/>
				<button onClick = { this.onChangeLink.bind( this ) } className='btn btn-primary'> Change Header Link </button>
			</div>
		)
	}
}


// Setting up propTypes
Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	greet: React.PropTypes.func,
	initialLinkName: React.PropTypes.string
}


// in video #6 the code looked like this:

// create your component and make it available for export 
// export class Home extends React.Component {
// 	// Define what gets rendered
// 	render() {
// 		// you can access the props through or output the data in a new component
// 		// console.log(this.props)
// 		let text = 'Something, something!'
// 		return (
// 			<div>		
// 				<p>Your name is {this.props.name}, and you are {this.props.age}, years old</p>
// 				<p>User Object => Name: {this.props.user.name}</p>
// 				<p>I am a new component!</p>
// 				<p>{text}</p>
// 				<div>
// 					<h4>Hobbies</h4>
// 					<ul>
// 						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
// 					</ul>
// 				</div>
// 				<hr/>
// 				{this.props.children}
// 			</div>
// 		)
// 	}
// }

// // looping through the array with a callback { map } which will give each individual hobby

// // Setting up propTypes
// Home.propTypes = {
// 	name: React.PropTypes.string,
// 	age: React.PropTypes.number,
// 	user: React.PropTypes.object,
// 	children: React.PropTypes.element.isRequired
// }