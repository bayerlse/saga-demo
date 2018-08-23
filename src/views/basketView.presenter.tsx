import * as React from 'react';
import { Article } from '../components/article/article.presenter';
import BasketDelete from '../components/basket-deletion/basketDeletion.presenter';
import ArticleAdd from '../components/article-add/articleAdd.presenter';
import BasketList from '../components/basket-table/basketTable.presenter';
import BasketInfo from '../modals/basket-info/basketInfo.presenter';

export interface ConditionProps {
	articles: Article[];
	basketInfoVisibility: boolean;
}

export interface ActionProps {
	onDeleteBasket: () => {};
	onDeleteArticle: (id: number) => void;
	onAddArticle: () => {};
	onArticleQuantityChange: (id: number, quantity: number) => void;
	onBasketInfoClose: () => {};
}
export interface Props extends ConditionProps, ActionProps {}

const BasketView: React.SFC<Props> = ({
	articles,
	onDeleteArticle,
	onDeleteBasket,
	onArticleQuantityChange,
	onAddArticle,
	onBasketInfoClose,
	basketInfoVisibility
}) => (
	<div>
		<BasketDelete onClick={onDeleteBasket} />
		<ArticleAdd onClick={onAddArticle} />
		<BasketList
			articles={articles}
			onArticleQuantityChange={onArticleQuantityChange}
			onDeleteArticle={onDeleteArticle}
		/>
		{basketInfoVisibility ? <BasketInfo onClose={onBasketInfoClose} /> : null}
	</div>
);
export default BasketView;
