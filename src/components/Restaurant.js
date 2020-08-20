import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput'
import Reservation from './Reservation'

@inject('GeneralStore', 'RestaurantStore')
@observer
class Restaurant extends Component {
  handleAdd = () => {
    this.props.RestaurantStore.addRes(
      this.props.GeneralStore.name,
      this.props.GeneralStore.numPeople
    )
  }
  render() {
    return (
      <div>
        <span>
          You have {this.props.RestaurantStore.openTables} open tables
        </span>
        <div>
          Total number of people in restaurant:
          {this.props.RestaurantStore.restPopulation}
        </div>
        <div>
          Total number of completed tables:
          {this.props.RestaurantStore.completedTables}
        </div>

        <ResInput />
        <button onClick={this.handleAdd} id='addRes'>
          Add Reservation
        </button>

        <div className='reservations'>
          {this.props.RestaurantStore.reservations.map(r => (
            <Reservation res={r} />
          ))}
        </div>
      </div>
    )
  }
}

export default Restaurant
