// import { directive } from "@babel/types";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard';
import './RestaurantsListPage.scss';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestourantsListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    const { restaurantsData } = this.props;

    return (
      <div className="restaurants-list">
        {restaurantsData.map((restaurant) => {
          const {
            uuid,
            title,
            heroImageUrl,
            categories,
            etaRange,
          } = restaurant;

          return (
            <RestaurantCard
              key={uuid}
              uuid={uuid}
              title={title}
              imageUrl={heroImageUrl}
              categories={categories}
              etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
            />
          );
        })}
      </div>
    );
  }
}

RestourantsListPage.propTypes = {
  loadRestaurants: PropTypes.func.isRequired,
  restaurantsData: PropTypes.arrayOf(PropTypes.object.isRequired),
};

RestourantsListPage.defaultProps = {
  restaurantsData: [],
};
