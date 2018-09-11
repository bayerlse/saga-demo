import { Action } from 'redux';
import { Article } from '../../components/article/article.presenter';

export enum BasketActionType {
	addArticle = 'BasketViewAction: addArticle',
	changeArticleQuantity = 'BasketViewAction: changeArticleQuantity',
	deleteArticle = 'BasketViewAction: deleteArticle',
	deleteBasket = 'BasketViewAction: deleteBasket',
	setBasketInfoVisibility = 'BasketViewAction: setBasketInfoVisibility'
}

export interface AddArticleAction extends Action<BasketActionType.addArticle> {
	payload: {
		article: Article;
	};
}
export interface ChangeArticleQuantityAction extends Action<BasketActionType.changeArticleQuantity> {
	payload: {
		id: number;
		quantity: number;
	};
}
export interface DeleteArticleAction extends Action<BasketActionType.deleteArticle> {
	payload: {
		id: number;
	};
}
export interface DeleteBasketAction extends Action<BasketActionType.deleteBasket> {}
export interface SetBasketInfoVisibilityAction extends Action<BasketActionType.setBasketInfoVisibility> {
	payload: {
		isVisible: boolean;
	};
}

export type BasketAction =
	| AddArticleAction
	| ChangeArticleQuantityAction
	| DeleteArticleAction
	| DeleteBasketAction
	| SetBasketInfoVisibilityAction;

// Action Creators
export const BasketActionCreators = {
	addArticle: (article: Article): AddArticleAction => ({
		type: BasketActionType.addArticle,
		payload: {
			article
		}
	}),
	changeArticleQuantity: (id: number, quantity: number): ChangeArticleQuantityAction => ({
		type: BasketActionType.changeArticleQuantity,
		payload: {
			id,
			quantity
		}
	}),
	deleteArticle: (articleId: number): DeleteArticleAction => ({
		type: BasketActionType.deleteArticle,
		payload: {
			id: articleId
		}
	}),
	deleteBasket: (): DeleteBasketAction => ({
		type: BasketActionType.deleteBasket
	}),
	setBasketInfoVisibility: (isVisible: boolean): SetBasketInfoVisibilityAction => ({
		type: BasketActionType.setBasketInfoVisibility,
		payload: {
			isVisible
		}
	})
};
