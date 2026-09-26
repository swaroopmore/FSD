import "./App.css";
import ProfileCard from "./components/ProfileCard";

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

            <ProfileCard
                name="Swaroop More"
                role="FULL STACK DEVELOPER"
                initials="SM"
                description="Computer Science graduate and MCA student interested in building modern web applications and AI-powered solutions."
            />

        </main>
    );
}

export default App;