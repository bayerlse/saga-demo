import { Props } from './basketDeletion.presenter';
import { Dispatch } from 'redux';
import { BasketActionCreators } from '../../state/actions/basket.actions';
import BasketDeletion from './basketDeletion.presenter';
import { connect } from 'react-redux';

/**
 * Call the clickItemSaga when a table row is clicked
 * Handles (de/)select of table rows
 * @param {Dispatch} dispatch
 * @returns {ActionProps}
 */
export const mapDispatchToProps = (dispatch: Dispatch): Props => ({
	onClick: () => dispatch(BasketActionCreators.deleteBasketClicked())
});

/**
 * Redux-wrapped BasketView
 */
const ConnectedBasketDeletion = connect(undefined, mapDispatchToProps)(BasketDeletion);

export default ConnectedBasketDeletion;
