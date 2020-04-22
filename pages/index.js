import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles"
import MainLayout from "../components/MainLayout";

const PostLink = (props) => (
  <Link href="/blog/[id]" as={`/blog/${props.id}`}>
    <a>{props.id}</a>
  </Link>
);

const useStyles = makeStyles((theme) => ({
  root: {
    height: `200vh`,
  },
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
    <MainLayout title={"Home | KGG"}>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <Navbar></Navbar>
      <div className={classes.root}>
        {/* {text} */}
        {/* <PostLink id="test-id-lamo" />
        <PostLink id="test-id-lamo1" />
        <PostLink id="test-id-lamo2" /> */}
      </div>
    </MainLayout>
  );
}
