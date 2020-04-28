import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";

import { attributes, react as HomeContent } from "../content/home.md";

const PostLink = (props) => (
  <Link href="/blog/[id]" as={`/blog/${props.id}`}>
    <a>{props.id}</a>
  </Link>
);

const useStyles = makeStyles((theme) => ({
  root: {
    height: `200vh`,
  },
  overlay: {
    color: "#FFF",
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%,-50%)",
    zIndex: "10",
    fontWeight: "700",
  },
  slide: {
    height: "80vh",
  },
  slideImage: {
    objectFit: "cover",
    height: "100%",
  },
  slideshow: {},
}));

export default function Index() {
  //Redirect to CMS from signup confirm link
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on(
        "login",
        () => (document.location.href = "/admin/"),
        []
      );
    }
  });

  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Home | KGG</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Carousel
        showThumbs={false} showStatus={false} 
        // renderIndicator={()=>false}
        infiniteLoop
        className={classes.slideshow}
      >
        <div className={classes.slide}>
          <Typography variant="h1" component="p" className={classes.overlay}>
            Fraternity for gamers
          </Typography>
          <img
            src="/img/slideshow/kgg_window.jpg"
            className={classes.slideImage}
          ></img>
        </div>
        <div className={classes.slide}>
          <Typography variant="h1" component="p" className={classes.overlay}>
            epic gaymer moment
          </Typography>
          <img
            src="/img/slideshow/ricardo.gif"
            className={classes.slideImage}
          ></img>
        </div>
        <div className={classes.slide}>
          <Typography variant="h1" component="p" className={classes.overlay}>
            Where gamers come to play
          </Typography>
          <img
            src="/img/slideshow/joseph_drink.jpg"
            className={classes.slideImage}
          ></img>
        </div>
        <div className={classes.slide}>
          <Typography variant="h1" component="p" className={classes.overlay}>
            Registered real estate brokers
          </Typography>
          <img
            src="/img/slideshow/pranav_snap.jpg"
            className={classes.slideImage}
          ></img>
        </div>
      </Carousel>
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="body1">
          <HomeContent />
        </Typography>
      </Container>
    </>
  );
}
