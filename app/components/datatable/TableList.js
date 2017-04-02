import React from 'react';
import { TableItem } from './TableItem';

export const TableList = (props) => {

        return (

            < div className = "table-list" > {
                props.datatable.length > 0 &&
                < ul className = "col-xs-12 col-md-12 grey" >
                < li className = "col-xs-12 col-md-2" > Movie Name < /li>
                < li className = "col-xs-12 col-md-2" > Year < /li>
                < li className = "col-xs-12 col-md-3" > Release Date < /li>
                < li className = "col-xs-12 col-md-3" > Movie Genre < /li>
                < li className = "col-xs-12 col-md-2" > Delete < /li> < /ul> } {
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



