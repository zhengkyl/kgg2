import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArticleList from "../../components/ArticleList";
import ArticleWindow from "../../components/ArticleWindow";
import settings from "../../content/settings.md";

// import fs from 'fs';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      height: "500px",
    },
  },
  cardMedia: {
    height: 250,
    [theme.breakpoints.up("sm")]: {
      flex: 2,
      height: "auto",
    },
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingLeft: 0,
    paddingRight: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,

    [theme.breakpoints.up("sm")]: {
      borderBottom: "none",
      margin: 0,
      padding: theme.spacing(4),
    },
  },
  brief: {
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      fontSize: "1.25rem",
    },
  },
  arrow: {
    position: "relative",
    top: 1,
  },
  otherContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  sectionHead: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  window: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up("sm")]: {
      borderBottom: "none",
    },
  },
}));

export default function News(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.card}>
        <CardMedia image="/img/kyle_pick.gif" className={classes.cardMedia} />
        <CardContent className={classes.content}>
          <Typography variant="overline" component="span">
            {props.frontPost.attributes.category}
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            className={classes.title}
          >
            {props.frontPost.attributes.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.brief}
          >
            {props.frontPost.attributes.blurb}
          </Typography>
          <Typography variant="button" component="span">
            READ ARTICLE
            <ArrowForwardIcon fontSize="inherit" className={classes.arrow} />
          </Typography>
        </CardContent>
      </div>
      <div className={classes.otherContent}>

        <Typography variant="h3" className={classes.sectionHead}>
          Hot Stuff
        </Typography>
        <ArticleWindow
          promotedArticles={props.hotPosts}
          className={classes.window}
        />

        {/* <Typography variant="h3" className={classes.sectionHead}>
          Warm Stuff
        </Typography>
        <ArticleWindow
          promotedArticles={props.articles}
          className={classes.window}
        /> */}

        <Typography variant="h4" className={classes.sectionHead}>
          All Articles
        </Typography>
        <ArticleList articles={props.articles} numLoad={1} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const articles = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // The filenames have the date at the beginning for sorting, but at the end
      // for aethetics in url. Therefore must be unreversed for slug for links
      let reverseSlug = key.replace(/.*[\\\/]/, "").split(".")[0];
      const slug = `${reverseSlug.slice(11)}_${reverseSlug.slice(0, 10)}`;
      const value = values[index];
      return {
        slug,
        attributes: value.attributes,
      };
    });
    return data;
  })(require.context("../../content/news", true, /\.md$/)).reverse();

  let modifiedArticles = articles.slice()
  let frontPost;
  if (settings.attributes.frontpage_post) {
    // I considered doing a binary search since its sorted by date, but we really need to
    // consider the effort to result ratio.
    for (let i = 0; i < modifiedArticles.length; i++) {
      if (
        modifiedArticles[i].attributes.date === settings.attributes.frontpage_post
      ) {
        frontPost = modifiedArticles.splice(i,1)[0];
        break;
      }
    }
  }else{
    frontPost = modifiedArticles.splice(0,1)[0]
  }

  let hotPosts = modifiedArticles.slice(0,3)

  // More Article windows can easily added. Just need to be sliced from
  // modifiedArticles to ensure no repeats. 

  return {
    props: {
      articles: articles,
      frontPost: frontPost,
      hotPosts: hotPosts,
      modifiedArticles: modifiedArticles,
    },
  };
}
