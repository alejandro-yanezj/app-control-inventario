import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './Components/Home'
import { AgregarProducto } from "./Components/agregar/AgregarProducto";
import { AgregarCliente } from "./Components/agregar/AgregarCliente";
import { Productos } from "./Components/vistaGeneral/Productos";
import { Detallecliente } from "./Components/vistaDetalle/DetalleCliente";
import { DetalleProducto } from "./Components/vistaDetalle/DetalleProducto";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);