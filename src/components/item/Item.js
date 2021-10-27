import React from 'react'

const Item = ({id, nombre, img, precio}) => {
    return (
            <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt={nombre}/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">${precio}</p>
                    <p className="card-text">ID: {id}</p>
                </div>
            </div>
    )
}

export default Item
