import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, IconButton } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { attributes, react as HomeContent } from "../content/home.md";
import homeSlideshow from "../content/slideshow/home_slideshow.md";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: `200vh`,
  },
  overlay: {
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
  navArrow: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "unset",
      position: "absolute",
      top: "50%",
      transform: "translate(0,-50%)",
      zIndex: 2,
      color: "white",
    },
  },
  right: {
    right: theme.spacing(1),
  },
  left: {
    left: theme.spacing(1),
  },
  about: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    [theme.breakpoints.up("md")]: {
      flexDirection:'row',
      padding: theme.spacing(2),
    },
  },
  content: {
    flex:1,
  },
  image: {
    width:'100%',
    height:'auto',
    maxWidth:"500px",
    [theme.breakpoints.up("md")]: {
      marginLeft:theme.spacing(3)
    },
  }
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
  const [autoPlay, setAutoPlay] = useState(false)

  const classes = useStyles();

  const createSlides = () =>
    homeSlideshow.attributes.slides.map((slide) => (
      <div className={classes.slide} key={slide.text}>
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
              color="secondary"
              disableElevation
              href={slide.buttonLink}
              target="_blank"
              onMouseEnter={()=>setAutoPlay(true)}
              onMouseLeave={()=>setAutoPlay(false)}
              // onMouseEnter={()=>console.log("1")}
              // onMouseLeave={()=>console.log("2")}
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
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay={true}
        interval={3000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <IconButton
              onClick={onClickHandler}
              title={label}
              className={clsx(classes.navArrow, classes.left)}
            >
              <NavigateBeforeIcon fontSize="large" />
            </IconButton>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <IconButton
              onClick={onClickHandler}
              title={label}
              className={clsx(classes.navArrow, classes.right)}
            >
              <NavigateNextIcon fontSize="large" />
            </IconButton>
          )
        }
      >
        {createSlides()}
      </Carousel>
      <Container maxWidth="md" className={classes.root}>
        <div className={classes.about}>
          <Typography variant="body1" component="div" className={classes.content}>
            <HomeContent />
          </Typography>
          <div className={classes.content}>
            <img src="/img/kgg_group.jpg" className={classes.image}></img>
          </div>
        </div>
      </Container>
    </>
  );
}
