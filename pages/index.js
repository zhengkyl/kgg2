import Navbar from '../components/Navbar'
import Link from 'next/link'

const PostLink = props => (
    <Link href="/blog/[id]" as={`/blog/${props.id}`}>
        <a>{props.id}</a>
    </Link>
)

export default function Index(){

    return (
        <><Navbar></Navbar>
        <div>
          {/* {text} */}
          <PostLink id="test-id-lamo"/>
          <PostLink id="test-id-lamo1"/>
          <PostLink id="test-id-lamo2"/>
        </div></>
    )
}