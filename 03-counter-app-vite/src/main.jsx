import React from "react";
import ReactDOM from 'react-dom/client';
import { HelloWord} from '../src/HelloWord';
import { FirstApp } from "./FirstApp";
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       
        <FirstApp title="Hola bienvenido Jefferson" edad={26} />
    </React.StrictMode>
);