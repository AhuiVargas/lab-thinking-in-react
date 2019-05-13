import React from "react";
import { Mycontext } from "../context";
import ProductRow from "./ProductRow";

const ProductTable = () => {
  return (
    <body>
      <Mycontext.Consumer>
        {({ products }) =>
          products.map((product, i) => (
            <ProductRow key={i} {...product} i={i + 1} />
          ))
        }
      </Mycontext.Consumer>
    </body>
  );
};

export default ProductTable;
