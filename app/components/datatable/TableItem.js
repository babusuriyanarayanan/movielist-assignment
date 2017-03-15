import React from 'react'

export const TableItem = (props) => {

    return (

        < ul className = { `col-md-12 ${props.item.color}` } >

        < li className = "col-md-2" > { props.item.title } < /li> 
        < li className = "col-md-2" > { props.item.status } < /li> 
        < li className = "col-md-3" > { props.item.created_at } < /li> 
        < li className = "col-md-3" > { props.item.updated_at } < /li> 
        < li className = "col-md-2" > < a href = "#"
        onClick = {
            () => props.handleRemove(props.item.id) } > Delete < /a></li >
        < /ul> 

    )
}

TableItem.propTypes = {
    item: React.PropTypes.object.isRequired
}
