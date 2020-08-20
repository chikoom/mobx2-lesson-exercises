import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('GeneralStore', 'RestaurantStore')
@observer
class Reservation extends Component {
  handleComplete = () => {
    this.props.RestaurantStore.completeRes(this.props.res.id)
  }
  handleSeat = () => {
    this.props.RestaurantStore.seatRes(this.props.res.id)
  }
  render() {
    const { res } = this.props
    return (
      <div className={res.completed ? 'conditional' : ''}>
        <h2>Reservation:</h2>
        <div>Name: {res.name}</div>
        <div>Number of people: {res.numPeople}</div>
        <div>Seated? {res.seated ? 'yes' : 'no'}</div>
        <div>Completed? {res.completed ? 'yes' : 'no'}</div>
        <button onClick={this.handleSeat}>SEAT</button>
        <button onClick={this.handleComplete}>COMPLETE</button>
      </div>
      //render the reservation data here
      //make sure you store the ID somewhere so you can find the reservation
      //use the class "conditional" to conditionally render completed reservations
      //You should hav ea complete reservation button to complete the reservation
    )
  }
}

export default Reservation
