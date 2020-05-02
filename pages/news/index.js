import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
  //   title: {
  //     [theme.breakpoints.up("md")]: {
  //         // fontSize:'3rem',
  //       },
  //   },
}));

export default function News() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.card}>
          <CardMedia image="/img/kyle_pick.gif" className={classes.cardMedia} />
          <CardContent className={classes.content}>
            <Typography variant="overline" component="span">
              News
            </Typography>
            <Typography
              gutterBottom
              variant="h3"
              component="h2"
              className={classes.title}
            >
              This is the new KGG website—whatdya think?
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              color="textSecondary"
              component="p"
              className={classes.brief}
            >
              It's been a long time coming, but it's finally here. A website
              with all the bells, whistles, and most importantly of all—dark
              mode.
            </Typography>
            <Typography variant="button" component="span">
              READ ARTICLE
              <ArrowForwardIcon fontSize="inherit" className={classes.arrow} />
            </Typography>
          </CardContent>
        </div>
      </Container>
    </div>
  );
}
