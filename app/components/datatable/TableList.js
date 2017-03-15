import React from 'react';
import { TableItem } from './TableItem';

export const TableList = (props) => {

        return (

            < div className = "table-list" > {
                props.datatable.length > 0 &&
                < ul className = "col-md-12 grey" >
                < li className = "col-md-2" > Title < /li> 
                < li className = "col-md-2" > Status < /li> 
                < li className = "col-md-3" > Updated < /li> 
                < li className = "col-md-3" > Created < /li> 
                < li className = "col-md-2" > Delete < /li> < /ul> } {
                    props.datatable.map(item => {

                            return <TableItem key = { item.id }
                            item = { item }
                            status = { props.status }
                            handleRemove = { props.handleRemove }
                            /> 
                        }

                    )
                }


                < /div>

            )

        }
