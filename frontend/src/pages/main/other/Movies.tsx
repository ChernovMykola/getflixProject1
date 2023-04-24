import React from "react";

interface Props {
  url: string;
  description: string;
}

export default function Product(props: Props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <p className="text-center">{props.description}</p>
    </div>
  );
}
