import React from 'react';
import {TableList} from './components/datatable/TableList';

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			datatable : [

				{
					"id": 1,
					"title": "Request from Nancy",
					"updated_at": "2015-08-15 12:27:01 -0600",
					"created_at": "2015-08-12 08:27:01-0600",
					"status": "Denied"
				},
				{
					"id": 2,
					"title": "Request from David",
					"updated_at": "2015-07-22 11:27:01 -0600",
					"created_at": "2015-07-15 12:27:01-0600",
					"status": "Approved"
				},
				{
					"id": 3,
					"title": "Request from Matt",
					"updated_at": "2015-07-22 11:27:01 -0600",
					"created_at": "2015-06-15 13:27:01-0600",
					"status": "Pending"
				},
				{
					"id": 4,
					"title": "Request from Perry",
					"updated_at": "2015-07-15 13:27:01 -0600",
					"created_at": "2015-07-14 14:27:01-0600",
					"status": "Pending"
				},
				{
					"id": 5,
					"title": "Request from Harrison",
					"updated_at": "2015-08-22 11:27:01 -0600",
					"created_at": "2015-07-29 15:27:01-0600",
					"status": "Approved"
				}

			],
			app_status : [
				{'id' : 'All', 'name' : 'All'},
				{'id' : 'Approved', 'name' : 'Approved'}, 
				{'id' : 'Denied', 'name' : 'Denied'}, 
				{'id' : 'Pending', 'name' : 'Pending'}
				],
			currentStatus : 'All'
			


		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleRemove = this.handleRemove.bind(this)

	}

	handleInputChange(evt)  {
	    this.setState({
	      currentStatus: evt.target.value
	    }) 
  	}

  	handleRemove(id) {
  		 // evt.preventDefault()
  		 console.log("idCCCCCCCCCC");
  		  const updatedDataTable = this.removeData(this.state.datatable, id)
		  this.setState({datatable: updatedDataTable})

  	}

  	removeData(list,id) {

  		const removeIndex = list.findIndex(item => item.id === id)
  		console.log(removeIndex)
		  return [
		    ...list.slice(0, removeIndex),
		    ...list.slice(removeIndex+1)
		  ]
  	}

  	filterStatus(list,status) {

  		return list.filter(item => {
  			if(status !== 'All') {
  	  				return item.status===status
  			} else {
  				return item
  			}
  			}

  			
  		)

  	}

	render() {
		
		
		const filteredList = this.filterStatus(this.state.datatable, this.state.currentStatus);
		 
		return (
				<div className="app-container">
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
				<div className="data-table">
					<h2> React Data table </h2>
					<TableList datatable = {filteredList} status={this.state.currentStatus}  handleRemove={this.handleRemove}/>
				</div>

				</div>



		);

	}
}

export default App;