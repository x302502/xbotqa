import React, { Component } from 'react'
export default class SearchComponent extends Component {

  state = {
    valueInput: ''
  }
  handleChangeText = (event) => {
    this.props.onSearch(event.target.value)
    this.setState({
      valueInput: event.target.value
    })
    
  }
  search = () => {
    this.props.onSearch(this.state.valueInput)
  }
  render() {
  
    return (
      <div className = "frameBody">
        <input 
            type="text"
            placeholder="Search by name!"
            className="frameSearch"
            value={this.state.valueInput}
            onChange={this.handleChangeText} />
          <button onClick={this.search} className="frameButton"> SEARCH </button> 
          <div className = "space30"></div> 
      </div>
    )
  }
}