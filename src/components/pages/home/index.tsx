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

function BlogPreviewCard({ thumbnail, title, date, _raw }: Post) {
    return (
        <Link href={_raw.flattenedPath}>
            <div>
                <Image
                    src={`/posts/thumbnail/${thumbnail}`}
                    className='w-full h-auto'
                    width={100}
                    height={100}
                    alt={'post-image'}
                    loading='lazy'
                    unoptimized
                />
            </div>
            <h2 className='font-medium'>{title}</h2>
            <p>{date}</p>
        </Link>
    );
}
