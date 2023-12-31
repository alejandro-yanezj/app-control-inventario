import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { Home } from './Components/Home'
import { AgregarProducto } from "./Components/Agregar/AgregarProducto";
import { AgregarCliente } from "./Components/Agregar/AgregarCliente";
import { Clientes } from "./Components/VistaGeneral/Clientes";
import { AgregarStock } from "./Components/Agregar/AgregarStockProducto"
import { Ventas } from "./Components/VistaGeneral/Ventas";
import { ErrorRedirectHome } from './Components/VistasError/ErrorRedirectHome'
import { DetalleVenta } from "./Components/VistaDetalle/DetalleVenta";
import { AgregarVenta } from "./Components/agregar/AgregarVenta";
import { Productos } from "./Components/vistaGeneral/Productos";

export default function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/app-inventario/" element={<Home />}>
          <Route path="productos" element={<Productos />}>
            <Route id="agregar-producto" path="agregar-producto" element={<AgregarProducto />} />
            <Route id="agregar-stock" path="agregar-stock" element={<AgregarStock />} />

          </Route>
          <Route path="clientes" element={<Clientes />}>
            <Route path="agregar-cliente" element={<AgregarCliente />} />
            <Route path="detalle-venta/:idVenta" element={<DetalleVenta />} />
            <Route path="generar-venta" element={<AgregarVenta/>}/>
          </Route>
          <Route path="ventas" element={<Ventas />}>
            <Route path="detalle-venta/:idVenta" element={<DetalleVenta />} />
            <Route path="generar-venta" element={<AgregarVenta/>}/>
          </Route>
        </Route>

        <Route path="/" element={<Navigate to="/app-inventario" />} />

        <Route path="*" element={<ErrorRedirectHome />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);