import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";
import "index.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appEntry = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

root.render(appEntry);
