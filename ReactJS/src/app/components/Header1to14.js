// Required dependencies
// import from package name
import React from 'react'

// create a stateless component and make it available for export
// it won't change so you can you const over let
export const Header = ( props ) => {
	return (
		<nav className = 'navbar navbar-default'>
			<div className = 'container'>
				<div className = 'navbar-header'>
					<ul className = 'nav navbar-nav'>
						<li><a href = '#'> { props.homeLink }</a></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}