import React, { Component } from 'react'
import './Calculator.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    state = { ...initialState }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {

        const values = [...this.state.values];

        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true });
            return;
        }

        let equals = operation === "=";
        const currentOperation = this.state.operation;

        let result = this.state.values[0];
        if ((currentOperation === '+' || currentOperation === '-') && operation === '%') {
            if (currentOperation === '+') {
                result = values[0] + (values[1] * (values[0] / 100));
            } else {
                result = values[0] - (values[1] * (values[0] / 100));
            }
            equals = "=";
        } else if (currentOperation === 'x²') {
            result = values[0] ** values[1];
        } else if (currentOperation === '+') {
            result = values[0] + values[1];
        } else if (currentOperation === '-') {
            result = values[0] - values[1];
        } else if (currentOperation === '÷') {
            result = values[0] / values[1];
        } else if (currentOperation === '×') {
            result = values[0] * values[1];
        } else if (currentOperation === '√') {
            result = Math.sqrt(values[1]);
        } else if (currentOperation === '%') {
            result = (values[1] * (values[0] / 100));
        }

        values[0] = isNaN(result) || result === Infinity ? '0' : result;
        values[1] = 0;

        this.setState({
            displayValue: values[0],
            clearDisplay: !equals,
            operation: equals ? null : operation,
            values,
            current: equals ? 0 : 1
        });
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({ displayValue, clearDisplay: false});

        if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <h1 className="text-white"><i className="fas fa-calculator text-body"></i> Calculator</h1>
                    <div className="card text-white bg-dark">
                        <div className="card-header">
                            <Display value={this.state.displayValue}/>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  calculator">
                                    <Button label="C"   click={this.clearMemory} clear />
                                    <Button label="%"   click={this.setOperation} operation />
                                    <Button label="x²"  click={this.setOperation} operation />
                                    <Button label="√"   click={this.setOperation} operation />
                                    <Button label="7"   click={this.addDigit} />
                                    <Button label="8"   click={this.addDigit} />
                                    <Button label="9"   click={this.addDigit} />
                                    <Button label="÷"   click={this.setOperation} operation />
                                    <Button label="4"   click={this.addDigit} />
                                    <Button label="5"   click={this.addDigit} />
                                    <Button label="6"   click={this.addDigit} />
                                    <Button label="×"   click={this.setOperation} operation />
                                    <Button label="1"   click={this.addDigit} />
                                    <Button label="2"   click={this.addDigit} />
                                    <Button label="3"   click={this.addDigit} />
                                    <Button label="-"   click={this.setOperation} operation />
                                    <Button label="0"   click={this.addDigit} />
                                    <Button label="."   click={this.addDigit} />
                                    <Button label="="   click={this.setOperation} equal />
                                    <Button label="+"   click={this.setOperation} operation />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}