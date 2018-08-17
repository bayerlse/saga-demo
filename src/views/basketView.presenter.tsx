import * as React from 'react';
import { Article } from '../components/article/article.presenter';
import BasketDelete from '../components/basket-deletion/basketDeletion.presenter';
import BasketList from '../components/basket-table/basketTable.presenter';

interface Props {
	articles: Article[];
	onDeleteBasket: () => {};
	onDeleteArticle: (id: number) => {};
	onArticleQuantityChange: (id: number, quantity: string) => {};
}

const BasketView: React.SFC<Props> = ({ articles, onDeleteArticle, onDeleteBasket, onArticleQuantityChange }) => (
	<div>
		<BasketList
			articles={articles}
			onArticleQuantityChange={onArticleQuantityChange}
			onDeleteArticle={onDeleteArticle}
		/>
		<BasketDelete onClick={onDeleteBasket} />
	</div>
);
export default BasketView;
