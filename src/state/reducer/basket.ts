import { Reducer } from 'redux';
import { BasketState, initialState } from '../basket.state';
import { BasketAction, BasketActionType } from '../actions/basket';

export const basketReducer: Reducer<BasketState, BasketAction> = (state = initialState, action) => {
	switch (action.type) {
		case BasketActionType.addArticle: {
			return {
				...state,
				articles: [ ...state.articles, action.payload.article ]
			};
		}
		case BasketActionType.changeArticleQuantity: {
			return {
				...state,
				articles: state.articles.map(
					(article) =>
						article.id === action.payload.id ? { ...article, quantity: action.payload.quantity } : article
				)
			};
		}
		case BasketActionType.deleteArticle: {
			const articleToDelete = state.articles.find((article) => article.id === action.payload.id);
			if (!!articleToDelete) {
				const deleteIndex = state.articles.indexOf(articleToDelete);
				const articles = [ ...state.articles ];
				articles.splice(deleteIndex, 1);
				return {
					...state,
					articles
				};
			} else {
				return state;
			}
		}
		case BasketActionType.deleteBasket: {
			return {
				...state,
				articles: []
			};
		}
		case BasketActionType.setBasketInfoVisibility: {
			return {
				...state,
				isBasketInfoVisible: action.payload.isVisible
			};
		}
		default: {
			return state;
		}
	}
};
