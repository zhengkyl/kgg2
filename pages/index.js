import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect } from "react";

const PostLink = (props) => (
  <Link href="/blog/[id]" as={`/blog/${props.id}`}>
    <a>{props.id}</a>
  </Link>
);

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
    </>
  );
}
