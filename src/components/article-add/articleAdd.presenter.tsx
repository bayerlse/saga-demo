import * as React from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

interface Props{
  onClick: () => {};
}
const ArticleAdd: React.SFC<Props> = ({ onClick }) => (
  <Button
    variant="contained"
    color="primary"
    className="button"
    onClick={onClick}
  >
    Add Article
    <AddShoppingCart style={{marginLeft:"10"}}/>
  </Button>
);
export default ArticleAdd;
