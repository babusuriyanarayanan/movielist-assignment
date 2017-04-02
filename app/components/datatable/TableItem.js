import React from 'react';
import Moment from 'moment';

export const TableItem = (props) => {

    return (

        < ul className = { `col-xs-12 col-md-12 ${props.item.color}` } >

        < li className = "col-xs-12 col-md-2" > { props.item.MovieName } < /li>
        < li className = "col-xs-12 col-md-2" > { props.item.Year } < /li>
        < li className = "col-xs-12 col-md-3" > { props.item.ReleaseDate } < /li>
        < li className = "col-xs-12 col-md-3" > { props.item.MovieGenre } < /li>
        < li className = "col-xs-12 col-md-2" > < a href = "#"
        onClick = {
            () => props.handleRemove(props.item.id) } > Delete < /a></li >
        < /ul> 

    )
}

TableItem.propTypes = {
    item: React.PropTypes.object.isRequired
}



