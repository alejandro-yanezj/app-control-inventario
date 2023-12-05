export const OrdenarVentasDesc = (ventas = [])=>{
    return ventas.sort((v1, v2) => (v1.numero > v2.numero) ? -1 : (v1.numero < v2.numero) ? 1 : 0);
}