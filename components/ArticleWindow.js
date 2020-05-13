import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Typography, List, ListItem } from "@material-ui/core";
import Link from "next/link";
import clsx from "clsx";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  card: {
    cursor:'pointer',
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "320",
    justifyContent: "space-between",
    alignItems: "start",
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    marginBottom: theme.spacing(2),
  },
  cardMedia: {
    // height: 250,
    paddingTop: "56.25%",
    width: "100%",
  },
  list: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      marginLeft: `-${theme.spacing(1)}px`,
      marginRight: `-${theme.spacing(1)}px`,
    },
  },
}));
export default function ArticleWindow({ className, promotedArticles }) {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  // A window shows 2 articles normally, but 3 for desktop sizes
  // This keeps logic local and keeps idiots from fricking up the site
  // by passing in oversized lists
  let articles = promotedArticles.slice(0, desktop ? 3 : 2);

  const classes = useStyles();
  const createArticleItem = (article) => (
    <Link href={`/news/${article.slug}`} key={article.slug}>
      <ListItem className={classes.card}>
        <div>
          <Typography variant="button" component="span" color="textSecondary">
            {article.attributes.category.toUpperCase()}
          </Typography>
          <Typography variant="h5" component="h3">
            {article.attributes.title}
          </Typography>
        </div>

        <CardMedia
          image={`${article.attributes.image}`}
          className={classes.cardMedia}
        />
      </ListItem>
    </Link>
  );

  return (
    <List className={clsx(className, classes.list)}>
      {articles.map(createArticleItem)}
    </List>
  );
}
