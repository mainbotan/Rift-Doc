export const DatabasesMainPage = () => {
    return (
        <>
            <h2 id='databases'><div className='title'><div className='tag'>/</div>Databases</div></h2>
            <br />
            The database management module has a special place in Rift. We are deliberately abandoning the ORM layer, which adds
            "magic" to your application. By creating Rift, we wanted to achieve maximum control (+ performance) from the developer
            's side, not only on the logic, but also on the ways to interact with the database.
            <br /><br />
            <h2 id='multitenancy'><div className='title middle'><div className='tag'>#</div>Multitenancy</div></h2>
            <br />
            Isolating the database schemas of a single tenant is an important aspect of working with Rift. We can say that we deliberately designed
            the system specifically for the problems and tasks of SAAS applications.
            <br /><br />
            <div className='text'>
                To understand the entire database interaction cycle, be sure to read all the topics in the database section of this documentation.
            </div>
        </>
    );
}