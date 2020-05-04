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
import settings from "../../content/settings.md"

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
    height: 220,
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
    [theme.breakpoints.up("sm")]: {
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
  //   title: {
  //     [theme.breakpoints.up("md")]: {
  //         // fontSize:'3rem',
  //       },
  //   },
}));

export default function News(props) {
  const classes = useStyles();

  let frontPost = props.articles[0];
  if (settings.attributes.frontpage_post !== '') {
    // I considered doing a binary search since its sorted by date, but we really need to
    // consider the effort to result ratio. Not worth literally decreasing loop by 1 iteration.
    for (let i = 0; i < props.articles.length; i++) {
      if (props.articles[i].attributes.date === settings.attributes.frontpage_post) {
        frontPost = props.articles[i];
        break;
      }
    }
  }
  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.card}>
        <CardMedia image="/img/kyle_pick.gif" className={classes.cardMedia} />
        <CardContent className={classes.content}>
          <Typography variant="overline" component="span">
            {frontPost.attributes.category}
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            className={classes.title}
          >
            {frontPost.attributes.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.brief}
          >
            {frontPost.attributes.blurb}
          </Typography>
          <Typography variant="button" component="span">
            READ ARTICLE
            <ArrowForwardIcon fontSize="inherit" className={classes.arrow} />
          </Typography>
        </CardContent>
      </div>
      <div className={classes.otherContent}>
        <Typography variant="h3">All Articles</Typography>
        <ArticleList articles={props.articles} numLoad={1}/>
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
      const slug = `${reverseSlug.slice(11)}_${reverseSlug.slice(0,10)}`
      const value = values[index];
      return {
        slug,
        attributes: value.attributes,
      };
    });
    return data;
  })(require.context("../../content/news", true, /\.md$/));
  return {
    props: {
      articles: articles.reverse(),
    },
  };
}
