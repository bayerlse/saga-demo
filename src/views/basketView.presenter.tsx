import * as React from "react";
import BasketDelete from "../components/basket-deletion/basketDeletion.container";
import ArticleAdd from "../components/article-add/articleAdd.presenter";
import BasketList from "../components/basket-table/basketTable.container";
import BasketInfo from "../modals/basket-info/basketInfo.presenter";
import "./basketView.presenter.css";

export interface ConditionProps {
  basketInfoVisibility: boolean;
}

export interface ActionProps {
  onAddArticle: () => {};
  onBasketInfoClose: () => {};
}
export interface Props extends ConditionProps, ActionProps {}

const BasketView: React.SFC<Props> = ({
  onAddArticle,
  onBasketInfoClose,
  basketInfoVisibility
}) => (
  <div>
    <div className="interactions">
      <div className="add">
        <ArticleAdd onClick={onAddArticle}  />
      </div>
      <div className="delete">
        <BasketDelete  />
      </div>
    </div>
    <BasketList />
    {basketInfoVisibility ? <BasketInfo onClose={onBasketInfoClose} /> : null}
  </div>
);
export default BasketView;
