import { AppState } from '../state/root.state';
import { ConditionProps, ActionProps } from './basketView.presenter';
import { Dispatch } from 'redux';
import { BasketActionCreators } from '../state/actions/basket.actions';
import BasketView from './basketView.presenter';
import { connect } from 'react-redux';
import { generateArticle } from '../util/mocks/articles';

/**
 * Map Redux state to BasketViewPresenter props
 * @param {AppState} state
 * @returns {ConditionProps}
 */
const mapStateToProps = (state: AppState): ConditionProps => ({
	basketInfoVisibility: state.basket.isBasketInfoVisible
});

/**
 * Call the onAddArticle Saga when a add button is clicked
 * Handles closing the basketInfo
 * @param {Dispatch} dispatch
 * @returns {ActionProps}
 */
export const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
	onAddArticle: () => dispatch(BasketActionCreators.addArticle(generateArticle())),
	onBasketInfoClose: () => dispatch(BasketActionCreators.setBasketInfoVisibility(false))
});

/**
 * Redux-wrapped BasketView
 */
const ConnectedBasketView = connect(mapStateToProps, mapDispatchToProps)(BasketView);

export default ConnectedBasketView;
