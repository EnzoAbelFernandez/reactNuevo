import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./Inicio";
import { ProductoContainer } from "./ProductoContainer";
import { ProductosDetalles } from "./ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductoContainer} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
			</Switch>
    </section>
  );
}
