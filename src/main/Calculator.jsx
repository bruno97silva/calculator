import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        console.log('limpar');
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n);
    }

    render() {
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <h1>Calculadora</h1>
                    <div className="card text-white bg-dark mb-3 mt-3">
                        <div className="card-header">
                            <Display value={100}/>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  calculator">
                                    <Button label="AC" click={this.clearMemory} triple/>
                                    <Button label="/" click={this.setOperation} operation/>
                                    <Button label="7" click={this.addDigit} />
                                    <Button label="8" click={this.addDigit} />
                                    <Button label="9" click={this.addDigit} />
                                    <Button label="*" click={this.addDigit} operation/>
                                    <Button label="4" click={this.addDigit} />
                                    <Button label="5" click={this.addDigit} />
                                    <Button label="6" click={this.addDigit} />
                                    <Button label="-" click={this.setOperation} operation/>
                                    <Button label="1" click={this.addDigit} />
                                    <Button label="2" click={this.addDigit} />
                                    <Button label="3" click={this.addDigit} />
                                    <Button label="+" click={this.setOperation} operation/>
                                    <Button label="0" click={this.addDigit} double/>
                                    <Button label="." click={this.setOperation} />
                                    <Button label="=" click={this.setOperation} operation/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}