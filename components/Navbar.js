import Link from 'next/link'

function getPages(){
    return [
        { title: 'Home', path: '/'},
        { title: 'News', path: '/news'},
        { title: 'Social', path: '/social'},
        { title: 'Store', path: '/store'},
    ]
}

const PageLink = ({ page }) =>(
    <li>
        <Link href={page.path}>
            <a title = {page.title}>{page.title}</a>
        </Link>
    </li>
)

export default function Navbar(){
    return (
        <div>
            {getPages().map(page => 
                <PageLink page = {page}></PageLink>
            )}
        </div>
    )
}