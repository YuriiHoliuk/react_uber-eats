import { connect } from 'react-redux';
import { RestourantsListPage } from './RestourantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectIsLoading,
  selectRestaurantsList,
  selectRestaurantsListError,
} from '../../store/selectors';

function mapStateToProps(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
    error: selectRestaurantsListError(state),
    isLoading: selectIsLoading(state),
  };
}

const mapDispatchToProps = {
  loadRestaurants,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestourantsListPage);

export { Enhanced as RestourantsListPage };
