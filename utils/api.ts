import { join } from 'path';
import fs from 'fs';

import matter from 'gray-matter';

export type Post = {
  key: string;
  title: string;
  date?: string;
  content: string;
};

const postDir = join(process.cwd(), 'posts');

export function getPostBySlug(slug: string): Post {
  const _slugWithSuffix = slug.replace(/\.md$/, '') + '.md';
  const postPath = join(postDir, _slugWithSuffix);
  const content = fs.readFileSync(postPath, 'utf-8');
  const payload = matter(content);
  const post: Post = {
    key: slug.replace(/\.md$/, ''),
    title: payload.data.title,
    content: payload.content,
  };

  if (payload.data.date && typeof payload.data.date === 'object') {
    post.date = payload.data.date.toDateString();
  }

  return post;
}

export function getPosts(): Post[] {
  const postFiles = fs.readdirSync(postDir);
  const posts = postFiles.map((postFile) => {
    return getPostBySlug(postFile);
  });

  return posts;
}
