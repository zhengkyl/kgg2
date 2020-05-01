import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@material-ui/core";
import { attributes, react as HomeContent } from "../content/home.md";
import homeSlideshow from "../content/slideshow/home_slideshow.md";
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
  },
  overlay2: {
    color: "#FFF",
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%,-50%)",
    zIndex: "10",
  },
  bold: {
    fontWeight: "600",
    marginBottom: theme.spacing(2),
  },
  slide: {
    height: "80vh",
  },
  slideImage: {
    objectFit: "cover",
    height: "100%",
    filter: "brightness(85%)",
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

  const createSlides = () =>
    homeSlideshow.attributes.slides.map((slide) => (
      <div className={classes.slide}>
        <div className={classes.overlay}>
          <Typography variant="h1" component="p" className={classes.bold}>
            {slide.text}
          </Typography>
          <span>
            <Typography variant="subtitle1" component="p">
              {slide.subtext}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              href={slide.buttonLink}
              target="_blank"
            >
              {slide.buttonText}
            </Button>
          </span>
        </div>

        <img
          src={slide.image.split("../../public")[1]}
          className={classes.slideImage}
        ></img>
      </div>
    ));

  return (
    <>
      <Head>
        <title>Home | KGG</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Carousel
        showThumbs={false}
        showStatus={false}
        // renderIndicator={()=>false}
        infiniteLoop
        className={classes.slideshow}
      >
        {createSlides()}
      </Carousel>
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="body1">
          <HomeContent />
        </Typography>
      </Container>
    </>
  );
}
