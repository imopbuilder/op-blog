import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import { Mdx } from '@/components/global/mdx';
import { getPost } from '@/components/pages/posts/post';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

type PageProps = {
    params: {
        slug: string;
    };
};

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