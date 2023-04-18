function About() {
    return (
        <>
            <div class="card small-card center vertical-spacing">
                <div class="card-body">
                    <h2>About</h2>
                    <p>This is my first web app created with the React Library. This site utilizes a Next JS
                        framework and is deployed on Vercel. In this demo app, users will be able to manage
                        a list of "recipes", deleting existing entries, or adding their own.</p>
                </div>
            </div>
            <div class="card small-card center vertical-spacing">
                <div class="card-body">
                    <h2>Known issues</h2>
                    <p>As it is my first time writing React, and the project timeline for this app is just a little under 2 weeks, there are many tweaks to make and functionalities to add.
                        Here are some of the things I would improve if I were to continue this project into the future:</p>
                    <ul>
                        <li>The state of the Recipes tab should be saved when unloaded, so changes the user makes are preserved
                            when changing tabs.</li>
                        <li>There could be some sort of backend so recipe lists are saved between sessions. (Or maybe these values
                            could be written to the cache? More research would be required here.)
                        </li>
                        <li>Implement form validation on the inputs where users can add their own recipe. Stronger form validation and user-facing
                            error messages would help make the form easier to interact with.
                        </li>
                        <li>Add some sort of functionality for editing existing recipes, instead of just deleting and retyping.</li>
                        <li>Add additional fields for each recipe for common structures like direction lists, cook time, prep time, etc.
                        </li>
                        <li>Consolidate components, check code against tutorials to verify best practices.</li>
                    </ul>
                </div>
            </div>
            <div class="card small-card center vertical-spacing">
                <div class="card-body">
                    <h2>Image citations</h2>
                    <ul>
                        <li>"<a href="https://freesvg.org/fresh-tomato">Fresh Tomato</a>" by <a href="https://freesvg.org/by/OpenClipart">Open Clipart</a> is licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a>. Published June 18, 2016.</li>
                    </ul>
                </div>
            </div>
        </>);
}

export default About;