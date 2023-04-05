import React from "react";
import Filho from "./Filho";

export default (props) => (
  <div>
    <h1>
      {props.nome} {props.sobrenome}
    </h1>
    <h2>Filhos</h2>

    <ul>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          ...props,
          ...child.props
        })
      })}

      {/* {props.children} */}
      {/* {React.cloneElement(props.children, {...props})} */}

      {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
      <Filho {...props} />
      <Filho nome="carla" {...props} />
      <Filho  {...props} nome="carla"/> */}
    </ul>
  </div>
);
