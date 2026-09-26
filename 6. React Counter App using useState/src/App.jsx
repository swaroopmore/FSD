import "./App.css";

function App() {
    return (
        <main className="counter-page">

            <section className="counter-header">
                <p className="eyebrow">COUNTER</p>

                <h1>Simple things,<br />done well.</h1>

                <p>
                    A minimal counter built with React.
                </p>
            </section>


            <section className="counter-box">

                <p className="counter-label">
                    CURRENT VALUE
                </p>

                <div className="counter-display">
                    0
                </div>

                <div className="counter-controls">

                    <button>
                        −
                    </button>

                    <button>
                        Reset
                    </button>

                    <button>
                        +
                    </button>

                </div>

            </section>

        </main>
    );
}

export default App;