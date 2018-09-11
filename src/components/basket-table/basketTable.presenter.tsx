import * as React from "react";
import ArticleItem, { Article } from "../article/article.presenter";
import Typography from "@material-ui/core/Typography";
import "./basketTable.presenter.css";

interface Props {
  articles: Article[];
  onDeleteArticle: (id: number) => void;
  onArticleQuantityChange: (id: number, quantity: number) => void;
}
const BasketList: React.SFC<Props> = ({
  articles,
  onDeleteArticle,
  onArticleQuantityChange
}) => (
  <div className="basket">
    <Typography variant="headline">Your Basket:</Typography>
    {!!articles.length ? (
      articles.map((article, index) => (
        <ArticleItem
          key={article.id}
          {...article}
          id={article.id}
          onDelete={() => onDeleteArticle(article.id)}
          onQuantityChange={qty =>
            onArticleQuantityChange(article.id, Number(qty))
          }
        />
      ))
    ) : (
      <Typography variant="subheading">... is currently empty</Typography>
    )}
  </div>
);
export default BasketList;
