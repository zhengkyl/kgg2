import { useRouter } from 'next/router';
import MainLayout from '../components/MainLayout';

const Post = () => {
    const router = useRouter();

    return (
        <MainLayout>
            <h1>{router.query.title}</h1>
        </MainLayout>
    );
}

export default Post