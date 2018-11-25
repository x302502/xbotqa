import React, { Component } from 'react'


export default class LevelTwoPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listCriteria: [],
      listIndices: [],
      inputOne: '',
      resOne: null,
      inputTwo: '',
      resTwo: []
    }
  }
  async componentWillMount() {
    await this.loadData();
  }
  loadData = async () => {
    try {
      const options = {
        'method': 'GET',
        'Content-Type': 'application/json'
      }
      let res = await fetch('https://xbot.com.vn/standards.json', options)
      if (res) {
        let listResult = await res.json();
        let listCriteria = [];
        let listIndices = [];
        listResult.map(item => {
          let tempList = item.criteria;
          listCriteria = listCriteria.concat(tempList);
          tempList.map(criteria => {
            listIndices = listIndices.concat(criteria.indices);
          })
        });


        this.setState({
          listCriteria: listCriteria,
          listIndices: listIndices,
          resTwo: listIndices
        })
      }
    } catch (error) {
      console.log(error);

    }
  }
  handleChangeTexOne = (event) => {
    this.setState({
      inputOne: event.target.value
    })
  }
  handleChangeTexTwo = (event) => {
    this.setState({
      inputTwo: event.target.value
    })
  }

  resultQuestionOne = () => {
    const { listCriteria, inputOne } = this.state;


    let result = listCriteria.find(x => x.name.toString().includes(inputOne));
    console.log(result);
    this.setState({
      resOne: result
    })
  }
  resultQuestionTwo = () => {
    const { inputTwo,listIndices } = this.state;
    if(inputTwo === '') {
      this.setState( {
        resTwo: listIndices
      })
    } else {
      this.setState( {
        resTwo: listIndices.filter(x=> x.level === Number(inputTwo))
      })
    }
  }
  render() {
    return (
      <div>
        <div>
          <h1> QUESTION 1: </h1>
          <input
            type="text"
            placeholder="search"
            value={this.state.inputOne}
            onChange={this.handleChangeTexOne} />
          <button onClick={this.resultQuestionOne}> View Result </button>

          <h2 style={{ color: 'red' }}>
            Result
          </h2>
          {this.state.resOne &&
            (
              <div>
                <h5>  {this.state.resOne.key} </h5>
                <h5> {this.state.resOne.name} </h5>
              </div>
            )
          }
        </div>

         <div>
          <h1> QUESTION 2: </h1>
          <input
            type="number"
            placeholder="level"
            value={this.state.inputTwo}
            onChange={this.handleChangeTexTwo} />
          <button onClick={this.resultQuestionTwo}> View Result </button>

          <h2 style={{ color: 'red' }}>
            Result
          </h2>
          { this.state.resTwo.length === 0 && 
            (
              <div>
                <h5> Empty list </h5>
              </div>
            )
          }
           <div>
                    {this.state.resTwo.map((item, index) => {
                        return (
                            <p key={index.toString()}>
                                Name:  {item.name} --- Level: {item.level}
                            </p>
                        )
                    })}
                </div>
         
        </div>
      </div>
    )

  }
}