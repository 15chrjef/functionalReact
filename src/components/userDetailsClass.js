import React from 'react'

const Username = (props) => {
	return <h1>{props.name}</h1>
}

const UserCity = (props) => {
	return <p>{props.city}</p>
}

export default class UserDetails extends React.Component {
	render(){
		return (
			<div>
				<Username name={this.props.user.name}/>
				<UserCity city={this.props.user.city}/>
			</div>
		)
	}
}



