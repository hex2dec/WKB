import { join } from 'path';
import fs from 'fs';

import matter from 'gray-matter';

export type Post = {
  key: string;
  title: string;
  author: string;
  content: string;
};

const postDir = join(process.cwd(), 'posts');

export function getPostBySlug(slug: string): Post {
  const _slugWithSuffix = slug.replace(/\.md$/, '') + '.md';
  const postPath = join(postDir, _slugWithSuffix);
  const content = fs.readFileSync(postPath, 'utf-8');
  const data = matter(content);
  return {
    key: slug.replace(/\.md$/, ''),
    title: data.data.title,
    author: data.data.author,
    content: data.content,
  };
}

export function getPosts(): Post[] {
  const postFiles = fs.readdirSync(postDir);
  const posts = postFiles.map((postFile) => {
    return getPostBySlug(postFile);
  });

  return posts;
}
