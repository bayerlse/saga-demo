import { put, select, call } from 'redux-saga/effects';
import {
	BasketActionType,
	BasketActionCreators,
	ChangeArticleQuantityAction,
	DeleteArticleClickedAction,
	DeleteBasketClickedAction
} from '../actions/basket.actions';
import { createSagaRegistration } from '../../util/store/sagaCreator';
import { wait } from '../../util/mocks/wait';
import { AppState } from '../root.state';

/**
 * Business Logic (Flow) for deleting the whole basket
 *  1) delete basket after succesfull request
 *  2) show user notifaction
 *  3) show recommondation
 */
export const deleteBasket = () =>
	function*(action: DeleteBasketClickedAction): Iterator<{}> {
		try {
			// Simulate Backend Call
			yield call(wait, 2000);
			yield put(BasketActionCreators.deleteBasket());
			yield put(BasketActionCreators.setBasketInfoVisibility(true));
		} catch (e) {
			console.log(e);
		}
	};

/**
 * Business Logic (Flow) for deleting an article
 * 1) check if deleted Item, is the last Item
 *  1.a) if so, delete basket
 *  1.b) if not, perform a standard deletion
 */
export const deleteArticle = () =>
	function*(action: DeleteArticleClickedAction): Iterator<{}> {
		const basketLength = yield select<AppState>((state) => state.basket.articles.length);
		if (basketLength === 1) {
			yield put(BasketActionCreators.deleteBasketClicked());
		} else {
			yield put(BasketActionCreators.deleteArticle(action.payload.id));
		}
	};

/**
 * Business Logic (Flow) for changing an articles quantity
 * 1) check if quantity changed to zero
 *  1.a) if so, delete article
 * 		1.a.b) if is last article perfom basket deletion
 *  1.b) if not, perform a standard quantity change
 * 		
 */
export const changeArticleQuantity = () =>
	function*(action: ChangeArticleQuantityAction): Iterator<{}> {
		const basketLength = yield select<AppState>((state) => state.basket.articles.length);
		const articleQuantity = action.payload.quantity;
		const articleId = action.payload.id;
		if (articleQuantity === 0) {
			yield put(BasketActionCreators.deleteArticle(articleId));
			if (basketLength === 1) {
				yield put(BasketActionCreators.deleteBasketClicked());
			}
		} else {
			yield put(BasketActionCreators.setArticleQuantity(articleId, articleQuantity));
		}
	};

/**
 * register all basket related sagas here
 */
export default [
	createSagaRegistration(deleteBasket, BasketActionType.clickDeleteBasket),
	createSagaRegistration(deleteArticle, BasketActionType.clickDeleteArticle),
	createSagaRegistration(changeArticleQuantity, BasketActionType.changeArticleQuantity)
];
