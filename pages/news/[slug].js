import MainLayout from "../../components/MainLayout";
// import { attributes, react as HomeContent } from "../../content/home.md";
const glob = require("glob");

export default function Post(props) {
  // const { title, cats } = attributes;
  return (
    <>
      {/* <p>{title}</p> */}
      <p>{props.title}</p>
      <p>{props.author}</p>
      {/* <p>{props.title}</p> */}
      {/* {props.react()} */}
      {/* <HomeContent /> */}
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../content/news/${slug}.md`);

  return {
    props: { ...content.attributes },
    // props: { ...content.attributes, react: content.react },
  };
}

export async function getStaticPaths() {
  const posts = glob.sync("content/news/**/*.md");

  const slugs = posts.map((file) =>
    file.split("/")[2].slice(0, -3).trim()
  );
  const paths = slugs.map((slug) => `/news/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
