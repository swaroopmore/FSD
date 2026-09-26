import "./App.css";

function App() {
    return (
        <main className="profile-page">

            <div className="profile-header">
                <p className="eyebrow">PROFILE</p>
                <h1>Meet the Developer</h1>
                <p>
                    A simple profile card built with React.
                </p>
            </div>

            <section className="profile-card">

                <div className="profile-image">
                    <span>SM</span>
                </div>

                <div className="profile-content">
                    <p className="profile-role">FULL STACK DEVELOPER</p>

                    <h2>Swaroop More</h2>

                    <p className="profile-description">
                        Computer Science graduate and MCA student interested
                        in building modern web applications and AI-powered
                        solutions.
                    </p>

                    <button className="profile-button">
                        View Profile
                    </button>
                </div>

            </section>

        </main>
    );
}

export default App;