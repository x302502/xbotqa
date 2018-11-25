import React, { Component } from 'react'


export default class LevelOnePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneRes: {
                input: [],
                sum: 0,
            },
            twoRes: {
                input: '',
                res: 0
            }
        }
    }

    randomInput = () => {
        const n = this.randomNumber();
        let arr = [];
        for (let index = 0; index < n; index++) {
            arr.push(this.randomNumber());
        }
        return arr;
    }
    randomNumber = () => {
        return Math.floor(Math.random() * 20);
    }

    fibonaci(valueInput) {
        const indexRes = Number(valueInput);
        let arr = [1, 1];
        for (let i = 2; i < indexRes; i++) {
            const value = arr[i - 1] + arr[i - 2];
            arr.push(value);
        }
        return arr[indexRes - 1]
    }
    handleChangeTex = (event) => {
        const { twoRes } = this.state;
        this.setState({
            ...this.state,
            twoRes: {
                ...twoRes,
                input: event.target.value
            }
        })
    }

    resultQuestionOne = () => {
        const input = this.randomInput();
        const sum = input.reduce((acc, current) => acc + current, 0);
        const oneRes = {
            input,
            sum
        }
        this.setState({
            oneRes: oneRes
        })
    }
    resultQuestionTwo = () => {
        if (Number(this.state.twoRes.input) <= 0) {
            alert('Value not found');
            return
        }

        const res = this.fibonaci(this.state.twoRes.input);
        console.log(res);
        const { twoRes } = this.state;
        this.setState({
            ...this.state,
            twoRes: {
                ...twoRes,
                res: res
            }
        })
    }
    render() {
        const { oneRes, twoRes } = this.state;
        return (
            <div>
                <div>
                    <h1> QUESTION 1: </h1>
                    <h2>Input random array:</h2>
                    <div>
                        <h2 style={{ color: 'blue' }}>
                            {oneRes.input.toString()}
                        </h2>
                    </div>
                    <button onClick={this.resultQuestionOne}>View Result</button>
                    <h2 style={{ color: 'red' }}>
                        {oneRes.sum.toString()}
                    </h2>
                </div>
                <div>
                    <h1> QUESTION 2: </h1>
                    <input
                        type="number"
                        placeholder="Postion fibonaci"
                        value={this.state.twoRes.input}
                        onChange={this.handleChangeTex} />
                    <button onClick={this.resultQuestionTwo}> View Result </button>

                    <h2 style={{ color: 'red' }}>
                        {twoRes.res.toString()}
                    </h2>
                </div>
            </div>
        )
    }
}

