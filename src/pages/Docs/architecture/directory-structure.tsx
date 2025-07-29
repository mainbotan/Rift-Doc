import CodeBlock from '../../../components/CodeBlock';
import { DirectoryStructureExample01 } from './examples/01-directory-structure';

export const DirectoryStructurePage = () => {
    return (
        <>
            <h2 id='directory-structure'><div className='title'><div className='tag'>/</div>Directory Structure</div></h2>
            <br />
            To start working on the application, you need to understand the structure of the directories and their purpose. 
            There are several fundamental differences in the architectural philosophy of Rift compared to the classical approach <div className='code-tag'>Http/Controllers</div>, offered for example by Laravel.
            Also, let's not forget that your Rift application won't have a presentation layer, meaning <div className='code-tag'>views</div> are simply missing. The server is intended for
            solely for the logic of the application, without visual elements.
            <br /><br />
            So, the intended directory architecture of your project:
            <br />
            <CodeBlock code={DirectoryStructureExample01} language='php' />
        </>
    );
}