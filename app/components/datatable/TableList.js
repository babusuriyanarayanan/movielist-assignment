import React from 'react';
import {TableItem} from './TableItem';

export const TableList = (props) => {
	
	return (

				<div className="table-list">

					<ul className="col-md-12">
					<li className="col-md-2"> Title </li>
					<li className="col-md-2"> Status </li>
					<li className="col-md-2"> Updated </li>
					<li className="col-md-2"> Created </li>
					<li className="col-md-2"> Delete </li>
					</ul>
					{

						props.datatable.map(item => {
							
							 return <TableItem key={item.id} item={item} status={props.status}  handleRemove={props.handleRemove}/> 
							}

								
													
						)
					}

					
				</div>

		)

}
