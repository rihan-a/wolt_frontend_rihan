import React from "react";
import "./App.css";

import CalculateFees from "./components/CalculateFees/CalculateFees";

function App() {
    return (
        <main className="main-wrapper">
            <section className="app-card">
                <div className="title-wrapper">
                    {/* <img src="/images/Wolt_logo.png" alt="wolt-logo" /> */}
                    <h1>Delivery Fee Calculator</h1>
                </div>
                <CalculateFees />
            </section>
        </main>
    );
}

export default App;
