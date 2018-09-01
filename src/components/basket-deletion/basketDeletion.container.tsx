import { Props } from './basketDeletion.presenter';
import { Dispatch } from 'redux';
import { AppState } from '../../state/root.state';
import { BasketActionCreators } from '../../state/actions/basket.actions';
import BasketDeletion from './basketDeletion.presenter';
import { connect } from 'react-redux';

/**
 * Map Redux state to BasketViewPresenter props
 * @param {AppState} state
 * @returns {ConditionProps}
 */
const mapStateToProps = (state: AppState): Pick<Props, 'isDisabled'> => ({
	isDisabled: state.basket.articles.length === 0
});

/**
 * Call the clickItemSaga when a table row is clicked
 * Handles (de/)select of table rows
 * @param {Dispatch} dispatch
 * @returns {ActionProps}
 */
export const mapDispatchToProps = (dispatch: Dispatch): Pick<Props, 'onClick'> => ({
	onClick: () => dispatch(BasketActionCreators.deleteBasketClicked())
});

/**
 * Redux-wrapped BasketView
 */
const ConnectedBasketDeletion = connect(mapStateToProps, mapDispatchToProps)(BasketDeletion);

export default ConnectedBasketDeletion;
