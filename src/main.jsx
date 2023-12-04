import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Components/Home'
import { AgregarProducto } from "./Components/agregar/AgregarProducto";
import { AgregarCliente } from "./Components/agregar/AgregarCliente";
import { Productos } from "./Components/vistaGeneral/Productos";
import { Clientes } from "./Components/vistaGeneral/Clientes";
import { AgregarStock } from "./Components/agregar/AgregarStockProducto"
import { Ventas } from "./Components/vistaGeneral/Ventas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/app-inventario/" element={<Home />}>
          <Route path="productos" element={<Productos />}>
            <Route path="agregar-producto" element={<AgregarProducto/>} />
          </Route>
          <Route path="clientes" element={<Clientes />}>
            <Route path="agregar-cliente"  element={<AgregarCliente />} />
          </Route>
          <Route path="ventas" element={<Ventas />} />
          <Route path="agregar-stock/:idProducto" element={<AgregarStock />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);