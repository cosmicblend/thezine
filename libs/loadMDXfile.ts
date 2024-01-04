import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';

// extend structure for MDXRemote
export interface MDXContent extends MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>> {
  // not using frontMatter
}

// load and serialize MDX files
export const loadMDXFile = async (filename: string): Promise<MDXContent> => {
  const filePath = path.join(process.cwd(), 'path-to-mdx-files', filename);
  const mdxContent = fs.readFileSync(filePath, 'utf8');
  const mdxSource = await serialize(mdxContent);
  return mdxSource;
};
