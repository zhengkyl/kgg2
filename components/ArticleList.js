import { makeStyles } from "@material-ui/core/styles";
import {
  CardMedia,
  Divider,
  Button,
  Hidden,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import Link from "next/link";
import { useState, useEffect } from "react";
import getDate from '../src/dateParser'

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
    // objectFit: "cover",
    width: "100%",
    paddingTop: '56.25%',
  },
  listImage:{
    width:'200px',
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



export default function ArticleList({ articles, numLoad }) {
  const classes = useStyles();
  const [numShown, setNumShown] = useState(0);
  const createArticleListItem = (article) => (
    <Link href={`/news/${article.slug}`} key={article.slug}>
      <ListItem divider className={classes.listItem}>
        <div className={classes.overline}>
          <Typography variant="h6" component="span" color="textSecondary">
            {getDate(article.attributes.date)} /{" "}
            {article.attributes.category.toUpperCase()}
          </Typography>
          <Typography variant="h5" component="h3" >
            {article.attributes.title}
          </Typography>
        </div>
        <Hidden smDown>
          <div className={classes.listImage}>
            <CardMedia
            image={`${article.attributes.image}`}
            className={classes.image}
          ></CardMedia>
          </div>
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
      <Divider/>
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
