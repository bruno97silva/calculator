import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {
    render() {
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-md-auto">
                    <h1>Calculadora</h1>
                    <div className="card text-white bg-danger mb-3 calculator">
                        <div className="card-header">
                            <Display value={100}/>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-auto">
                                    <Button label="AC" />
                                    <Button label="/" />
                                    <Button label="7" />
                                    <Button label="8" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-auto">
                                    <Button label="9" />
                                    <Button label="*" />
                                    <Button label="4" />
                                    <Button label="5" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-auto">
                                    <Button label="6" />
                                    <Button label="-" />
                                    <Button label="1" />
                                    <Button label="2" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-auto">
                                    <Button label="3" />
                                    <Button label="+" />
                                    <Button label="0" />
                                    <Button label="." />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-auto">
                                    <Button label="=" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}