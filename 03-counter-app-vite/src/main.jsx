import React from "react";
import ReactDOM from 'react-dom/client';
import { HelloWord} from '../src/HelloWord';
import { FirstApp } from "./FirstApp";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWord />
        <FirstApp/>
    </React.StrictMode>
);