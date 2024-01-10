import { allPosts } from 'contentlayer/generated';

export function getPost(slug: string) {
    return allPosts.find((doc) => doc._raw.flattenedPath === slug);
}
