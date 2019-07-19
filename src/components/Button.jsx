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

<<<<<<< HEAD
    let classe = 'btn ' + btnColor;
=======
    let classes = 'btn ' + btnColor
    classes += props.double ? 'double' : ''
>>>>>>> 021a3dbefb3e910fb73e7a1be615ca98c70d2e89

    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classe}>
            {props.label}
        </button>
    )
}