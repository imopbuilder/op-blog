import { Post } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

export function Mdx({ post }: { post: Post }) {
    const Component = getMDXComponent(post.body.code);

    return <Component />;
}
