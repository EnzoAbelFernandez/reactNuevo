import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";
import {collection, addDoc, getFirestore} from "firebase/firestore";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
	};

	const removeProducto = id =>{
		if(window.confirm("¿Quieres suspender el producto?")){
			carrito.forEach((item, index)=>{
				if(item.id === id){
					item.cantidad = 1;
					carrito.splice(index, 1)
				}
			})
			setCarrito([...carrito])
		}
	}

  const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";
	
	let input = document.getElementById("input")
	
	const addOrder = () =>{
		const db = getFirestore()
		const productos = collection(db, "ordenes")
		let order = {products: carrito, comprador: toString(input.value)}
		addDoc(productos, order).then(()=>{
			console.log("ordenado")
			input.value = null
			setCarrito([])
		})

	}


  return (
    <div className={show1}>
      <div className={show2}>
        <div onClick={tooglefalse} className="carrito__close">
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su Carrito</h2>
        <div className="carrito__center">
					{
					
					
					carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :<>
					{
					carrito.map((producto) => (
            <div className="carrito__item" key={producto.id}>
              <img src={producto.image} alt={producto.title} />
              <div>
                <h3> {producto.title} </h3>
                <p className="price">${producto.price}</p>
              </div>
              
							<div 
							onClick={() => removeProducto(producto.id)} 
							className="remove__item"
							>
                <box-icon name="trash" />
              </div>
            </div>
					))
				};
					
					</>
					}
        </div>

        <div className="carrito__footer">
          <h3>Total: ${total}</h3>
		  <input id="input" type={"text"} placeholder="Nombre del comprador"></input>
          <button className="btn" onClick={()=>addOrder()}>Payment</button>
        </div>
      </div>
    </div>
  );
};
