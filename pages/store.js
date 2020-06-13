import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // container: {
  //   textAlign:'center',
  // },
  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop:theme.spacing(1),
    // marginBottom:theme.spacing(2),
  },
  pageTitle:{
      fontWeight:500,
      textAlign:'center',
      marginTop:theme.spacing(4),
      marginBottom:theme.spacing(2),
  }
}));

export default function Store() {
  const classes = useStyles();
  const storeItem = (path, name) => (
    <Grid item sm={7} md={5}>
    <img src={path}></img>
    <span className={classes.info}>
      <Typography variant="h5" component="span">
        {name}
      </Typography>
      <Button variant="outlined" disabled>
        SOLD OUT
      </Button>
    </span>
  </Grid>
  )
  return (
    <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h2" className={classes.pageTitle}>
            Fall 2020 Drops
        </Typography>
      <Grid container spacing={8} justify="center">
        {storeItem("/img/store/kgg_tee.jpg", "Standard White T-shirt")}
        {storeItem("/img/store/kgg_tee_female.jpg", "Slim White T-shirt")}
        {storeItem("/img/store/kgg_pants.jpg", "Black Skinny Pants")}
        {storeItem("/img/store/kgg_tee_black.jpg", "Black Turtleneck")}
        {storeItem("/img/store/kgg_water.jpg", "Bath Water")}
      </Grid>
    </Container>
  );
}
