import { useRouter } from 'next/router';
import MainLayout from '../../components/MainLayout';
import { attributes, react as HomeContent} from '../../content/home.md'

const Post = () => {
    const router = useRouter();
    const { title, cats } = attributes;
    return (
        <MainLayout>
            <h1>{router.query.id}</h1>
            <p>{title}</p>
            <HomeContent/>
        </MainLayout>
    );
}

export default Post