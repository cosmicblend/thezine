import { MDXRemote } from 'next-mdx-remote';
import { loadMDXFile, MDXContent } from '../../libs/loadMDXfile';  

interface StoryProps {
    mdxSources: { [key: string]: MDXContent };  
}

const Story = ({ mdxSources }: StoryProps) => {
    const part1 = mdxSources['editor-letter'];
    //const part2 = mdxSources['story-part2'];
  
    return (
      <div>
        <h1>A LETTER FROM OUR EDITOR</h1>
        {part1 && (
          <div>
            <MDXRemote {...part1} />
          </div>
        )}

        <h1>Next MDX</h1>

        {/*part2 && (
          <div>
            <MDXRemote {...part2} />
          </div>
        )*/}
      </div>
    );
};

export default Story;

export const getStaticProps = async () => {
    const mdxSources = {
      'editor-letter': await loadMDXFile('../pages/mdx/issue00/letter-from-editor.mdx'),
      //'editor-letter': await loadMDXFile('../pages/mdx/story-one-part1.mdx'),
    };
    return { props: { mdxSources } };
};
