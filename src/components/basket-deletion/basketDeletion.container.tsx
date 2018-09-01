import { Props } from './basketDeletion.presenter';
import { Dispatch } from 'redux';
import { AppState } from '../../state/root.state';
import { BasketActionCreators } from '../../state/actions/basket.actions';
import BasketDeletion from './basketDeletion.presenter';
import { connect } from 'react-redux';

/**
 * Map Redux state to BasketDeletion  props
 * @param {AppState} state
 * @returns {ConditionProps}
 */
const mapStateToProps = (state: AppState): Pick<Props, 'isDisabled'> => ({
	isDisabled: state.basket.articles.length === 0
});

/**
 * Call the delete Basket Saga when basket deletion is clicked
 * @param {Dispatch} dispatch
 * @returns {ActionProps}
 */
export const mapDispatchToProps = (dispatch: Dispatch): Pick<Props, 'onClick'> => ({
	onClick: () => dispatch(BasketActionCreators.deleteBasketClicked())
});

/**
 * Redux-wrapped BasketDeletion
 */
const ConnectedBasketDeletion = connect(mapStateToProps, mapDispatchToProps)(BasketDeletion);

export default ConnectedBasketDeletion;
