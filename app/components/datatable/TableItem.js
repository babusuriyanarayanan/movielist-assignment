import React from 'react';
import Moment from 'moment';

export const TableItem = (props) => {

  var cDate = Moment(props.item.created_at).format('MMMM Do YYYY, h:mm:ss a')
  var uDate = Moment(props.item.updated_at).format('MMMM Do YYYY, h:mm:ss a')
  
    return (

        < ul className = { `col-xs-12 col-md-12 ${props.item.color}` } >

        < li className = "col-xs-12 col-md-2" > { props.item.title } < /li> 
        < li className = "col-xs-12 col-md-2" > { props.item.status } < /li> 
        < li className = "col-xs-12 col-md-3" > { cDate } < /li> 
        < li className = "col-xs-12 col-md-3" > { uDate } < /li> 
        < li className = "col-xs-12 col-md-2" > < a href = "#"
        onClick = {
            () => props.handleRemove(props.item.id) } > Delete < /a></li >
        < /ul> 

    )
}

TableItem.propTypes = {
    item: React.PropTypes.object.isRequired
}
