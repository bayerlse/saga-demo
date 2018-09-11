import * as React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

export interface Props {
  onClick: () => {};
}
const BasketDelete: React.SFC<Props> = ({ onClick }) => (
  <Button
    variant="contained"
    color="secondary"
    className="button"
	onClick={onClick}
  >
    Delete Basket
        <DeleteIcon style={{marginLeft:"10"}}/>
  </Button>
);
export default BasketDelete;