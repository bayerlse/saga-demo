import { Action } from 'redux';
import { Article } from '../../components/article/article.presenter';

export enum BasketActionType {
	addArticle = 'BasketAction: addArticle',
	changeArticleQuantity = 'BasketAction: changeArticleQuantity',
	setArticleQuantity = 'BasketAction: setArticleQuantity',
	deleteArticle = 'BasketAction: deleteArticle',
	clickDeleteArticle = 'BasketAction: deleteArticleClicked',
	deleteBasket = 'BasketAction: deleteBasket',
	clickDeleteBasket = 'BasketAction: clickDeleteBasket',
	setBasketInfoVisibility = 'BasketAction: setBasketInfoVisibility'
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
export interface SetArticleQuantityAction extends Action<BasketActionType.setArticleQuantity> {
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
export interface DeleteArticleClickedAction extends Action<BasketActionType.clickDeleteArticle> {
	payload: {
		id: number;
	};
}
export interface DeleteBasketClickedAction extends Action<BasketActionType.clickDeleteBasket> {}
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
	| SetBasketInfoVisibilityAction
	| DeleteArticleClickedAction
	| DeleteBasketClickedAction
	| SetArticleQuantityAction;

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
	}),
	// Saga related action creators
	setArticleQuantity: (id: number, quantity: number): SetArticleQuantityAction => ({
		type: BasketActionType.setArticleQuantity,
		payload: {
			id,
			quantity
		}
	}),
	deleteArticleClicked: (articleId: number): DeleteArticleClickedAction => ({
		type: BasketActionType.clickDeleteArticle,
		payload: {
			id: articleId
		}
	}),
	deleteBasketClicked: (): DeleteBasketClickedAction => ({
		type: BasketActionType.clickDeleteBasket
	})
};
