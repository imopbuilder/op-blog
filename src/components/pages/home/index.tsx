import { allPosts, Post } from 'contentlayer/generated';
import Image from 'next/image';

export default function AllBlogsPreview() {
    return (
        <div>
            {allPosts.map((post) => (
                <BlogPreviewCard key={post._id} {...post} />
            ))}
        </div>
    );
}

function BlogPreviewCard({ thumbnail, title, description, date }: Post) {
    return (
        <div>
            <div>
                <Image src={`/posts/thumbnail/${thumbnail}`} className='w-full h-auto' width={100} height={100} alt={'post-image'} />
            </div>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
}
