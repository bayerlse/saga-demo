import { Article } from '../components/article/article.presenter';

/**
 * BasketView state shape
 */
export type BasketState = Readonly<{
	articles: Article[];
	isBasketInfoVisible: boolean;
}>;

/**
 * BasketView initial state
 */
export const initialState: BasketState = {
	articles: [],
	isBasketInfoVisible: false
};
