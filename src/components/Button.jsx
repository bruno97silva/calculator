import React from 'react'
import './Button.css'

export default props => {

    let btnColor = 'btn-light ';
    if(props.operation) {
        btnColor = 'btn-warning ';
    }
    if(props.equal) {
        btnColor = 'btn-primary ';
    }

    let classes = 'btn ' + btnColor
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}