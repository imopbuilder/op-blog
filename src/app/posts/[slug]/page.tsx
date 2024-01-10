import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import { Mdx } from '@/components/global/mdx';
import { getPost } from '@/components/pages/posts/post';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

type PageProps = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: PageProps) {
    const post = getPost(params.slug);

    if (!post) return { title: 'Not Found.' };

    return {
        title: post.title,
    };
}

export default function page({ params }: PageProps) {
    const post = getPost(params.slug);

    if (!post) return notFound();

    return (
        <Fragment>
            <Header />
            <main className='mx-5'>
                <section>
                    <div className='min-h-hvh'>
                        <Mdx post={post} />
                    </div>
                </section>
            </main>
            <Footer />
        </Fragment>
    );
}

export function generateStaticParams() {
    return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}
