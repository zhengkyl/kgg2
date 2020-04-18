import { useRouter } from 'next/router';
import MainLayout from '../../components/MainLayout';

const Post = () => {
    const router = useRouter();

    return (
        <MainLayout>
            <h1>{router.query.id}</h1>
            <p>default post content</p>
        </MainLayout>
    );
}

export default Post