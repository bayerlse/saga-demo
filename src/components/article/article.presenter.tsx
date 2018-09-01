import * as React from "react";
import "./article.presenter.css";
import notFound from "../../assets/notFound.jpg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

export interface Article {
  id: number;
  name: string;
  quantitiy: number;
}

interface Props extends Article {
  onDelete: (id: number) => void;
  onQuantityChange: (quantity: string) => void;
}

const Article: React.SFC<Props> = ({
  name,
  id,
  quantitiy,
  onDelete,
  onQuantityChange
}) => (
  <Card className="card">
    <CardMedia className="pic" image={notFound} />
    <div className="details">
      <CardContent className="content">
        <Typography variant="headline">{name}</Typography>
        <Typography variant="subheading" color="textSecondary">
          {id}
        </Typography>
      </CardContent>
    </div>
    <CardContent className="content">
      <Typography variant="subheading" color="textSecondary">
        Quantity:
      </Typography>
      <input
        className="quantity"
        type="text"
        onChange={e => {
          onQuantityChange(e.currentTarget.value);
        }}
        defaultValue={String(quantitiy)}
      />
    </CardContent>
    <div className="delete">
      <Button
        variant="contained"
        color="secondary"
        className="button"
        onClick={() => onDelete(id)}
      >
        <DeleteIcon />
      </Button>
    </div>
  </Card>
);

export default Article;
