import { MDXRemote } from 'next-mdx-remote';
import { loadMDXFile, MDXContent } from '../../libs/loadMDXfile';  

interface StoryProps {
    mdxSources: { [key: string]: MDXContent };  
}

const Story = ({ mdxSources }: StoryProps) => {
    const part1 = mdxSources['story-part1'];
    const part2 = mdxSources['story-part2'];
  
    return (
      <div>
        {part1 && (
          <div>
            <MDXRemote {...part1} />
          </div>
        )}

        <h1>Next MDX</h1>

        {part2 && (
          <div>
            <MDXRemote {...part2} />
          </div>
        )}
      </div>
    );
};

export default Story;

export const getStaticProps = async () => {
    const mdxSources = {
      'story-part1': await loadMDXFile('../pages/mdx/story-one-part1.mdx'),
      'story-part2': await loadMDXFile('../pages/mdx/story-one-part2.mdx'),
    };
    return { props: { mdxSources } };
};
