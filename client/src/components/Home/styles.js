import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appBarSearch: {
    borderRaduis: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    borderRaduis: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  [theme.breakpoints.down("xs")]: {
    gridContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
