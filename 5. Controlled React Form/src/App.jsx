import "./App.css";

function App() {
    return (
        <main className="form-page">

            <section className="form-heading">
                <p className="eyebrow">CONTACT FORM</p>

                <h1>Let's start a conversation.</h1>

                <p>
                    Share your details and a little about what
                    you would like to discuss.
                </p>
            </section>

            <section className="form-area">

                <form className="contact-form">

                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>

                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>

                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>

                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <button type="submit">
                        Send Message
                    </button>

                </form>

                <div className="form-note">
                    <span>01</span>

                    <p>
                        Your information will be displayed
                        in the preview once we add React state.
                    </p>
                </div>

            </section>

        </main>
    );
}

export default App;