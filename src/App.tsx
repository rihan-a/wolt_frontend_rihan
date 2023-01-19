import React, { useState } from "react";
import "./App.css";

import CalculateFees from "./components/CalculateFees/CalculateFees";

function App() {
    return (
        <main className="main-wrapper">
            <h1>Delivery Fee Calculator</h1>
            <CalculateFees />
        </main>
    );
}

export default App;
