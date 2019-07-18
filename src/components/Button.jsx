import React from 'react'
import './Button.css'

export default props => {

    let btnColor = 'btn-light ';
    if (props.clear) {
        btnColor = 'btn-danger ';
    }
    if (props.operation) {
        btnColor = 'btn-warning ';
    }
    if (props.equal) {
        btnColor = 'btn-success ';
    }

    let classes = 'btn ' + btnColor
    classes += props.double ? 'double' : ''

    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}