import * as React from 'react';
import BasketDelete from '../components/basket-deletion/basketDeletion.container';
import ArticleAdd from '../components/article-add/articleAdd.presenter';
import BasketList from '../components/basket-table/basketTable.container';
import BasketInfo from '../modals/basket-info/basketInfo.presenter';

export interface ConditionProps {
	basketInfoVisibility: boolean;
}

export interface ActionProps {
	onAddArticle: () => {};
	onBasketInfoClose: () => {};
}
export interface Props extends ConditionProps, ActionProps {}

const BasketView: React.SFC<Props> = ({ onAddArticle, onBasketInfoClose, basketInfoVisibility }) => (
	<div>
		<BasketDelete />
		<ArticleAdd onClick={onAddArticle} />
		<BasketList />
		{basketInfoVisibility ? <BasketInfo onClose={onBasketInfoClose} /> : null}
	</div>
);
export default BasketView;
