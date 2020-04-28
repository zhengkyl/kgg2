import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
// import { attributes, react as HomeContent } from "../../content/home.md";
const glob = require("glob")

export default function Post(props) {
  const router = useRouter();
  // const { title, cats } = attributes;
  return (
    <MainLayout>
      {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
      <h1>{router.query.slug}</h1>
      {/* <p>{title}</p> */}
      <p>{props.title}</p>
      <p>{props.author}</p>
      {/* <p>{props.title}</p> */}
      {/* {props.react()} */}
      {/* <HomeContent /> */}


      {/* https://www.netlifycms.org/docs/customization/ */}
      {/* https://dev.to/tinacms/creating-a-markdown-blog-with-next-js-52hk */}
    </MainLayout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../content/news/${slug}.md`);

  return {
    props: { ...content.attributes},
    // props: { ...content.attributes, react: content.react },
  };
}

export async function getStaticPaths() {
  const posts = glob.sync("content/news/**/*.md");

  const slugs = posts.map((file) =>
    file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim()
  );

  const paths = slugs.map(slug => `/news/${slug}`)

  return {
    paths,
    fallback: false,
  }
}