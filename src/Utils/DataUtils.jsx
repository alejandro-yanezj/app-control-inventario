export const getVentas = () =>{
    return[
        {
            "idVenta":1,
            "idCliente":1,
            "numero":10001,
            "fecha":"20-11-2023"
        },
        {
            "idVenta":2,
            "idCliente":1,
            "numero":10002,
            "fecha":"20-11-2023"
        },
        {
            "idVenta":3,
            "idCliente":2,
            "numero":10003,
            "fecha":"20-11-2023"
        },
        {
            "idVenta":4,
            "idCliente":2,
            "numero":10004,
            "fecha":"20-11-2023"
        },
        {
            "idVenta":5,
            "idCliente":2,
            "numero":10005,
            "fecha":"20-11-2023"
        }
    ]

}

export const getClientes = () =>{
    return [
        {
            "idCliente":1,
            "nombre":"Alejandro Yañez",
            "rut": "18610378",
            "dv":"5",
            "direccion":"Lago pirihueico 6502, La Florida",
            "email":"alejandro.yanezj@gmail.com",
            "telefono": "+56954360080"
        },
        {
            "idCliente":2,
            "nombre":"Victor Yañez",
            "rut": "11111111",
            "dv":"1",
            "direccion":"Algun lugar de Aysen",
            "email":"alejandro.yanezj@gmail.com",
            "telefono": "+56954360080"
        },
        {
            "idCliente":3,
            "nombre":"Thomas Ahumada",
            "rut": "12345678",
            "dv":"9",
            "direccion":"Walker Martinez",
            "email":"alejandro.yanezj@gmail.com",
            "telefono": "+56954360080"
        }
    ]
}

export const getProductos = () =>{
        return [
            {
                "id":1,
                "nombre":"Pechuga pollo",
                "sku": "10001",
                "unidad": "kg"
            },
            {
                "id":2,
                "nombre":"Chuleta",
                "sku": "10002",
                "unidad": "kg"
            },
            {
                "id":3,
                "nombre":"Aceite 900ml",
                "sku": "10003",
                "unidad": "unidad"
            },
            {
                "id":4,
                "nombre":"Trutro entero pollo",
                "sku": "500001",
                "unidad": "unidad"
            },
            {
                "id":5,
                "nombre":"Trutro ala pollo",
                "sku": "500002",
                "unidad": "unidad"
            },
            {
                "id":6,
                "nombre":"Sin stock",
                "sku": "500003",
                "unidad": "unidad"
            }
        ]
}

export const getStockProductos = () =>{
    return [
        {   "idStock":1,
            "idProducto":1,
            "precio":1500,
            "stock":10,
            "fecha":"2023-11-20"
        },
        {
            "idStock":2,
            "idProducto":1,
            "precio":1600,
            "stock":10,
            "fecha":"2023-11-21"
        },
        {
            "idStock":3,
            "idProducto":1,
            "precio":2000,
            "stock":10,
            "fecha":"2023-11-22"
        },
        {
            "idStock":4,
            "idProducto":2,
            "precio":1500,
            "stock":10,
            "fecha":"2023-11-20"
        },
        {
            "idStock":5,
            "idProducto":2,
            "precio":1600,
            "stock":10,
            "fecha":"2023-11-21"
        },
        {
            "idStock":6,
            "idProducto":3,
            "precio":1500,
            "stock":10,
            "fecha":"2023-11-20"
        },
        {
            "idStock":7,
            "idProducto":4,
            "precio":1500,
            "stock":10,
            "fecha":"2023-11-20"
        },
        {
            "idStock":8,
            "idProducto":5,
            "precio":1500,
            "stock":10,
            "fecha":"2023-11-20"
        },
        {
            "idStock":9,
            "idProducto":5,
            "precio":2000,
            "stock":10,
            "fecha":"2023-11-22"
        },
        {
            "idStock":10,
            "idProducto":5,
            "precio":2500,
            "stock":10,
            "fecha":"2023-11-23"
        }
    ]

}

export const getDetalleVenta = () =>{
    return {
        "idVenta": 74,
        "idCliente": 1,
        "nombreCliente": "Alejandro Yañez",
        "numeroVenta": 100066,
        "fecha": "2023-12-18T14:23:32.479229",
        "detalleVenta": [
            {
                "idProducto": 3,
                "nombreProducto": "CHULETA CENTRO",
                "sku": "100003",
                "unidad": "KG",
                "precioCompra": 3000.0,
                "precioVenta": 4000.0,
                "cantidad": 1,
                "totalVenta": 4000.0,
                "ganancia": 1000.0,
                "gananciaPorcentual": 33.3333333333333
            },
            {
                "idProducto": 3,
                "nombreProducto": "CHULETA CENTRO",
                "sku": "100003",
                "unidad": "KG",
                "precioCompra": 2100.0,
                "precioVenta": 4000.0,
                "cantidad": 1,
                "totalVenta": 4000.0,
                "ganancia": 1900.0,
                "gananciaPorcentual": 90.4761904761905
            }
        ]
    }

}