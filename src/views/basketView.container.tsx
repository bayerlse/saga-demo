import { AppState } from '../state/root.state';
import { ConditionProps, ActionProps } from './basketView.presenter';
import { Dispatch } from 'redux';
import { BasketActionCreators } from '../state/actions/basket';
import BasketView from './basketView.presenter';
import { connect } from 'react-redux';
import { generateArticle } from '../util/mocks/articles';

/**
 * Map Redux state to BasketViewPresenter props
 * @param {RootState} state
 * @param {ContainerProps} ownProps
 * @returns {ConditionProps}
 */
const mapStateToProps = (state: AppState): ConditionProps => ({
	basketInfoVisibility: state.basket.isBasketInfoVisible
});

/**
 * Call the clickItemSaga when a table row is clicked
 * Handles (de/)select of table rows
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
