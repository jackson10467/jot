import React, { Component } from 'react'
import { getOneCategory, getAllJots, getOneJot, postJot, putJot, destroyJot} from '../services/api-helper';

export default class showCategory extends Component {
  state = {
    jots: []
  }
  componentDidMount() {
    this.setFood()
  }

  setFood = async () => {
    const food = await getOneCategory(this.props.foodId);
    this.setState({ food })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      flavor: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const food = await addFlavor(this.state.flavor, this.state.food.id);
    this.setState({ food });
  }

  render() {
    const { food } = this.state;
    return (
      <div>
        {
          food && (
            <>
              <h3>{food.name}</h3>
              {food.flavors.map(flavor => (
                <p key={flavor.id}>{flavor.name}</p>
              ))}
            </>
          )
        }

      </div>
    )
  }
}
