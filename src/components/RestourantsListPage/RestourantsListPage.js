// import { directive } from "@babel/types";
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class RestourantsListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    const { restaurantsData } = this.props;

    return (
      <div>
        <pre>
          {JSON.stringify(restaurantsData, null, 4)}
        </pre>
      </div>
    );
  }
}

RestourantsListPage.propTypes = {
  loadRestaurants: PropTypes.func.isRequired,
  restaurantsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
