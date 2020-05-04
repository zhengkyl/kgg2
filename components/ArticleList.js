import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Divider,
  Hidden,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import Link from "next/link";
import { useState, useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  listItem: {
    cursor: "pointer",
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  image: {
    objectFit: "cover",
    maxHeight: "300px",
    height: "120px",
    width: "auto",
  },
  overline: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  loadButton: {
    //   backgroundColor:theme.palette.primary.main,
    //   color:
    width: "100%",
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  end: {
    width: "100%",
    textAlign: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const months = [
  "Easter Egg",
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const getDateFromString = (stringDate) =>
  `${months[parseInt(stringDate.slice(5, 7))]} ${stringDate.slice(8, 10)}`;

export default function ArticleList({ articles, numLoad }) {
  const classes = useStyles();
  const [numShown, setNumShown] = useState(0);
  const createArticleListItem = (article) => (
    <Link href={`/news/${article.slug}`} key={article.slug}>
      <ListItem divider className={classes.listItem}>
        <div className={classes.overline}>
          <Typography variant="h6" component="span" color="textSecondary">
            {getDateFromString(article.attributes.date)} /{" "}
            {article.attributes.category.toUpperCase()}
          </Typography>
          <Typography variant="h4" component="h3">
            {article.attributes.title}
          </Typography>
        </div>
        <Hidden smDown>
          <img
            src={`${article.attributes.image}`}
            className={classes.image}
          ></img>
        </Hidden>
      </ListItem>
    </Link>
  );
  useEffect(() => {
    showMoreArticles();
  }, []);

  const showMoreArticles = () => {
    if (numShown + numLoad > articles.length) {
      setNumShown(articles.length);
    } else {
      setNumShown(numShown + numLoad);
    }
  };

  return (
    <List>
      <Divider />
      {articles.slice(0, numShown).map(createArticleListItem)}
      {numShown == articles.length ? (
        <Typography
          variant="h4"
          component="div"
          color="textSecondary"
          className={classes.end}
        >
          (ง︡'-'︠)ง Stop scrolling. There's nothing left.
        </Typography>
      ) : (
        <Button
          variant="contained"
          color="primary"
          className={classes.loadButton}
          onClick={showMoreArticles}
        >
          {/* <Typography variant="button" > */}
          Load more articles
          {/* </Typography> */}
        </Button>
      )}
    </List>
  );
}
