import React from 'react';

class Status extends React.Component {

	constructor() {
		super()
		this.state = {
			app_status : [
				{'id' : 0, 'name' : 'All'},
				{'id' : 10, 'name' : 'Approved'}, 
				{'id' : 20, 'name' : 'Denied'}, 
				{'id' : 30, 'name' : 'Pending'}
				],
			currentStatus : '0'
		}

		this.handleInputChange = this.handleInputChange.bind(this)

	}


	handleInputChange(evt)  {
		
	    this.setState({
	      currentStatus: evt.target.value
	    }) 
  	}

	render() {
		
	return (
	<div className="row">
		<div className="col-md-12">
			<h2>Requests </h2>
		</div>
			<div className="col-md-12 status-container">
				
				<select name = "status" className="status" onChange={this.handleInputChange}>
				{
						this.state.app_status.map(option => (
								<option key ={option.id} value= {option.id}>{option.name}</option>
							)
						)

				}
			  	</select>	
				
			</div>
				
		</div>


	

	)

}


}

export default Status;