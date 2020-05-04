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
  // For aethestic reasons, I put the data last in the slug,
  // which is opposite of the actual filename. Therefore filenames are reverseSlug
  const reverseSlug = `${slug.slice(-10)}_${slug.slice(0,-11)}`
  const content = await import(`../../content/news/${reverseSlug}.md`);

  return {
    props: { ...content.attributes },
    // props: { ...content.attributes, react: content.react },
  };
}

export async function getStaticPaths() {
  const posts = glob.sync("content/news/**/*.md");

  const slugs = posts.map((file) => {
    // Here, the filename is reversed, so the date must be moved to the end
    // for the path
    let reverseSlug = file.split("/")[2].slice(0, -3).trim();
    return `${reverseSlug.slice(11)}_${reverseSlug.slice(0,10)}`
  });
  const paths = slugs.map((slug) => `/news/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
