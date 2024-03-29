import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        thumbnail: { type: 'string', required: true },
        date: { type: 'string', required: true },
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    },
}));

export default makeSource({ contentDirPath: 'src/posts', documentTypes: [Post] });
