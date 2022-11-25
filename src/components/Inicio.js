import React from 'react'
import { Link } from "react-router-dom";


export default function Inicio() {
    return (
        <div className="inicio">   
            <article className="def-margin container-fluid bg-light p-4">
                <div clasName="row align-items-center">
                    <Link to={"/producto/3"}>
                    <img className="col-sm-12 col-md-8 col-lg-6" src="https://images.stockx.com/images/Gucci-x-The-North-Face-Oversize-T-Shirt-Beige.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1611134889&q=57"
                    alt="Gucci X TNF"/>
                    </Link>
                    <div className="col-sm-12 col-md-4 col-lg-6">
                        <main className="row fs-4 ms-1">NEW IN</main>
                        <p className="row ms-1">Disponible ahora. </p>
                    </div>
                </div>
            </article>
        </div>
    )
}
