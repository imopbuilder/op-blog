import { allPosts, Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export default function AllBlogsPreview() {
    return (
        <Fragment>
            {allPosts.map((post) => (
                <BlogPreviewCard key={post._id} {...post} />
            ))}
        </Fragment>
    );
}

function BlogPreviewCard(props: Post) {
    const { thumbnail, title, date, url } = props;

    return (
        <Link href={url} className='group'>
            <div className='overflow-hidden'>
                <Image
                    src={`/posts/thumbnail/${thumbnail}`}
                    className='w-full h-auto aspect-square group-hover:scale-110 duration-200'
                    width={100}
                    height={100}
                    alt={'post-image'}
                    loading='lazy'
                    unoptimized
                />
            </div>
            <h2 className='font-semibold pt-3 pb-1.5'>{title}</h2>
            <p className='text-sm'>{date}</p>
        </Link>
    );
}
