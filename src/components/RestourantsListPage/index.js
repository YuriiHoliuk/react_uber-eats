import { connect } from 'react-redux';
import { RestourantsListPage } from './RestourantsListPage';
import { loadRestaurants } from '../../store/actions';
import { selectRestaurantsList } from '../../store/selectors';

function mapStateToProps(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
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
