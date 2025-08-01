export const FromTheInsideMainPage = () => {
    return (
        <>
            <h2 id='architectural-concepts'><div className='title'><div className='tag'>/</div>From The Inside</div></h2>
            <br />
            Despite the fact that Rift is a mini-framework, an experienced reader will enjoy the beauty of its construction and the best practices for designing complex systems.
            The framework's structure and modularity allow you to have control over each component and replace individual module implementations with your own custom ones.
            The only rule you need to follow is not to make things too complicated for yourself. If you find the implementation of the router offered by Rift to be excessive or insufficient for your project, you can replace it using the DI container configuration and the interface you need. If you want to add a custom metric system, you can replace the implementation. If you have your own migration system, feel free to replace it.
        </>
    );
}