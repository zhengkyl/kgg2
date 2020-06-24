import MainLayout from "../../components/MainLayout";
// import { attributes, react as HomeContent } from "../../content/home.md";
const glob = require("glob");
import { makeStyles } from "@material-ui/core/styles";
import getDate from '../../src/dateParser'

import {
  CardMedia,
  Container,
  Divider,
  Button,
  Hidden,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import Interweave, { Node } from "interweave";

// This does not work in the slightest. Needed for responsive fonts.
// function transform(node, children) {
//   if (node.tagName === 'h1') {
//     console.log("hi")
//     return <Typography variant='h1'>{children}</Typography>;
//   }
// }
const useStyles = makeStyles((theme) => ({
  articleHead:{
    paddingTop:theme.spacing(4),
    paddingBottom:theme.spacing(4),
  },
  article: {
    fontSize: "1.25rem",
  },
  title: {
    fontWeight: 500,
  },
  cardMedia: {
    paddingTop: "42%",
    marginBottom:theme.spacing(4)
  },
  image: {
    padding: 0,
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  info:{
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
    paddingBottom:theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up("md")]: {
      margin:0,
      position:'absolute',
      borderBottom:'none',
    },
  }
}));

const filter = {
  attribute: (name, value) => name==='src' ? `/${value}`:value,
};

export default function Article(props) {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.articleHead}>
        <Typography variant="button" component="span">
          {props.category}
        </Typography>
        <Typography variant="h2" component="h1" className={classes.title}>
          {props.title}
        </Typography>
      </Container>
      <Container maxWidth="md" className={classes.image}>
        <CardMedia image="/img/kyle_pick.gif" className={classes.cardMedia} />
        <div className={classes.info}>

        <Typography variant="subtitle1">
          {props.author}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {getDate(props.date)}
        </Typography>
        </div>
      </Container>
      
      <Container maxWidth="sm" className={classes.article}>
        <Interweave content={props.body} filters={[filter]}/>
      </Container>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  // For aethestic reasons, I put the data last in the slug,
  // which is opposite of the actual filename. Therefore filenames are reverseSlug
  const reverseSlug = `${slug.slice(-10)}_${slug.slice(0, -11)}`;
  const { attributes, html } = await import(
    `../../content/news/${reverseSlug}.md`
  );

  return {
    props: { ...attributes, body: html },
  };
}

export async function getStaticPaths() {
  const posts = glob.sync("content/news/**/*.md");

  const slugs = posts.map((file) => {
    // Here, the filename is reversed, so the date must be moved to the end
    // for the path
    let reverseSlug = file.split("/")[2].slice(0, -3).trim();
    return `${reverseSlug.slice(11)}_${reverseSlug.slice(0, 10)}`;
  });
  const paths = slugs.map((slug) => `/news/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
