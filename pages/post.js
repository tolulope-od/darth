import { useRouter } from 'next/router';
import Layout from '../components/Layout';

function Content() {
  const router = useRouter();
  return (
    <>
      <h1>{ router.query.title }</h1>
      <p>This is the blog post content</p>
    </>
  )
}

export default function Page() {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}