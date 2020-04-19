import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect } from "react";

const PostLink = (props) => (
  <Link href="/blog/[id]" as={`/blog/${props.id}`}>
    <a>{props.id}</a>
  </Link>
);

export default function Index() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      console.log("here");
      window.netlifyIdentity.on("init", (user) => {
        console.log("init");
        if (!user) {
          console.log("ho");
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
      window.netlifyIdentity.on("init", (user) => console.log("init", user));
      window.netlifyIdentity.on("login", (user) => console.log("login", user));
      window.netlifyIdentity.on("logout", () => console.log("Logged out"));
      window.netlifyIdentity.on("error", (err) => console.error("Error", err));
      window.netlifyIdentity.on("open", () => console.log("Widget opened"));
      window.netlifyIdentity.on("close", () => console.log("Widget closed"));
    }
  }, []);
  return (
    <>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <Navbar></Navbar>
      <div>
        {/* {text} */}
        <PostLink id="test-id-lamo" />
        <PostLink id="test-id-lamo1" />
        <PostLink id="test-id-lamo2" />
      </div>
      {/* <script>{
        `if (window.netlifyIdentity) {
          console.log("here");
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              console.log("ho");
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          })
        }`}
      </script> */}
    </>
  );
}
////////////////PUT IN NEW FILE AND USE SRC WITH DEFER IF NEEDED
