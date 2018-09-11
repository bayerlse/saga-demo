import { AppState } from '../state/root.state';
import BasketView, { ConditionProps, Props } from './basketView.presenter';
import { Dispatch } from 'redux';
import { BasketAction, BasketActionCreators } from '../state/actions/basket.actions';
import { connect } from 'react-redux';
import { wait } from '../util/mocks/wait';
import { generateArticle } from '../util/mocks/articles';

/**
 * Interface for Actions that can trigger dispatches to redux store
 */
export interface DispatchActions {
	deleteArticle: (articleId: number) => void;
	changeArticleQuantity: (articleId: number, quantity: number) => void;
	deleteBasket: () => void;
	setBasketInfoVisibility: (isVisible: boolean) => {};
	addArticle: () => {};
}

/**
 * Map Redux state to BasketViewPresenter props
 * @param {RootState} state
 * @param {ContainerProps} ownProps
 * @returns {ConditionProps}
 */
const mapStateToProps = (state: AppState, ownProps: {}): ConditionProps => ({
	articles: state.basket.articles,
	basketInfoVisibility: state.basket.isBasketInfoVisible
});

const bindActionsToDispatch = (dispatch: Dispatch<BasketAction>): DispatchActions => ({
	deleteArticle: (articleId) => dispatch(BasketActionCreators.deleteArticle(articleId)),
	changeArticleQuantity: (id, quantity) => dispatch(BasketActionCreators.changeArticleQuantity(id, quantity)),
	deleteBasket: () => dispatch(BasketActionCreators.deleteBasket()),
	setBasketInfoVisibility: (isVisible) => dispatch(BasketActionCreators.setBasketInfoVisibility(isVisible)),
	addArticle: () => dispatch(BasketActionCreators.addArticle(generateArticle()))
});

/**
 * Merge all props and handle validations and logic
 */
export const mergeProps = (stateProps: ConditionProps, dispatchActions: DispatchActions): Props => {
	return {
		...stateProps,
		onDeleteBasket: () => handleBasketDelete(stateProps, dispatchActions),
		onDeleteArticle: (articleId) => handleArticleDelete(articleId, stateProps, dispatchActions),
		onArticleQuantityChange: (id, quantity) =>
			handleArticleQuantityChange(id, quantity, stateProps, dispatchActions),
		onAddArticle: dispatchActions.addArticle,
		onBasketInfoClose: () => dispatchActions.setBasketInfoVisibility(false)
	};
};

const handleBasketDelete = async (stateProps: ConditionProps, dispatchActions: DispatchActions) => {
	try {
		// Simulate Backend Call
		await wait(2000);
		dispatchActions.deleteBasket();
		dispatchActions.setBasketInfoVisibility(true);
	} catch (e) {
		console.log(e);
	}
};

const handleArticleDelete = (articleId: number, stateProps: ConditionProps, dispatchActions: DispatchActions) => {
	if (stateProps.articles.length === 1) {
		handleBasketDelete(stateProps, dispatchActions);
	} else {
		dispatchActions.deleteArticle(articleId);
	}
};

const handleArticleQuantityChange = (
	articleId: number,
	quantity: number,
	stateProps: ConditionProps,
	dispatchActions: DispatchActions
) => {
	if (quantity === 0) {
		dispatchActions.deleteArticle(articleId);
		if (stateProps.articles.length === 1) {
			handleBasketDelete(stateProps, dispatchActions);
		}
	} else {
		dispatchActions.changeArticleQuantity(articleId, quantity);
	}
};

/**
 * Redux-wrapped BasketView
 */
const ConnectedBasketView = connect<ConditionProps, DispatchActions, {}, Props>(
	mapStateToProps,
	bindActionsToDispatch,
	mergeProps
)(BasketView);

export default ConnectedBasketView;
