import { Mdx } from '@/components/global/mdx';
import { Button } from '@/components/ui/button';
import { Post, allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

export function getPost(slug: string) {
    return allPosts.find((doc) => doc._raw.flattenedPath === slug);
}

export function BlogContent({ post }: { post: Post }) {
    const { title, thumbnail, description } = post;

    return (
        <div>
            <div className='py-5'>
                <div>
                    <Image
                        src={`/posts/thumbnail/${thumbnail}`}
                        className='w-full h-[20vh] object-cover'
                        width={100}
                        height={100}
                        alt={title}
                        loading='lazy'
                        unoptimized
                    />
                </div>
                <Button className='py-5 px-0' variant='link' asChild>
                    <Link href={'/'}>Blog</Link>
                </Button>
                <p className='text-5xl'>{title}</p>
                <p className='text-muted-foreground text-sm py-2'>{description}</p>
            </div>
            <div>
                <Mdx post={post} />
            </div>
        </div>
    );
}
