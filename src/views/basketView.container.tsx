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
export interface DispatchHandler {
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

const bindDispatchToHandler = (dispatch: Dispatch<BasketAction>): DispatchHandler => ({
	deleteArticle: (articleId) => dispatch(BasketActionCreators.deleteArticle(articleId)),
	changeArticleQuantity: (id, quantity) => dispatch(BasketActionCreators.changeArticleQuantity(id, quantity)),
	deleteBasket: () => dispatch(BasketActionCreators.deleteBasket()),
	setBasketInfoVisibility: (isVisible) => dispatch(BasketActionCreators.setBasketInfoVisibility(isVisible)),
	addArticle: () => dispatch(BasketActionCreators.addArticle(generateArticle()))
});

/**
 * Merge result of mapStateToProps and bindDispatchToHandler
 * to presenters props
 */
export const mergeProps = (stateProps: ConditionProps, dispatchHandler: DispatchHandler): Props => {
	return {
		...stateProps,
		onDeleteBasket: () => handleBasketDelete(stateProps, dispatchHandler),
		onDeleteArticle: (articleId) => handleArticleDelete(articleId, stateProps, dispatchHandler),
		onArticleQuantityChange: (id, quantity) =>
			handleArticleQuantityChange(id, quantity, stateProps, dispatchHandler),
		onAddArticle: dispatchHandler.addArticle,
		onBasketInfoClose: () => dispatchHandler.setBasketInfoVisibility(false)
	};
};

const handleBasketDelete = async (stateProps: ConditionProps, dispatchActions: DispatchHandler) => {
	try {
		// Simulate Backend Call
		await wait(2000);
		dispatchActions.deleteBasket();
		dispatchActions.setBasketInfoVisibility(true);
	} catch (e) {
		console.log(e);
	}
};

const handleArticleDelete = (articleId: number, stateProps: ConditionProps, dispatchActions: DispatchHandler) => {
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
	dispatchActions: DispatchHandler
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
const ConnectedBasketView = connect<ConditionProps, DispatchHandler, {}, Props>(
	mapStateToProps,
	bindDispatchToHandler,
	mergeProps
)(BasketView);

export default ConnectedBasketView;
