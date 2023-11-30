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
