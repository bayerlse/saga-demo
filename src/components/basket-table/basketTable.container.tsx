import { AppState } from '../../state/root.state';
import { Props } from './basketTable.presenter';
import { Dispatch } from 'redux';
import { BasketActionCreators } from '../../state/actions/basket.actions';
import BasketTable from './basketTable.presenter';
import { connect } from 'react-redux';

/**
 * Map Redux state to BasketTablePresenter props
 * @param {RootState} state
 * @param {ContainerProps} ownProps
 * @returns {ConditionProps}
 */
const mapStateToProps = (state: AppState): Pick<Props, 'articles'> => ({
	articles: state.basket.articles
});

/**
 * Call the articleQuantityChanged Saga when quantity changed
 * Call the articleDelete Saga when qarticle is deleted
 * @param {Dispatch} dispatch
 * @returns {ActionProps}
 */
export const mapDispatchToProps = (dispatch: Dispatch): Pick<Props, 'onArticleQuantityChange' | 'onDeleteArticle'> => ({
	onArticleQuantityChange: (articleId, quantity) =>
		dispatch(BasketActionCreators.changeArticleQuantity(articleId, quantity)),
	onDeleteArticle: (articleId) => dispatch(BasketActionCreators.deleteArticleClicked(articleId))
});

/**
 * Redux-wrapped BasketTable
 */
const ConnectedBasketTable = connect(mapStateToProps, mapDispatchToProps)(BasketTable);

export default ConnectedBasketTable;
