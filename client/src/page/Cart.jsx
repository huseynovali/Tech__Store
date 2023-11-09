import React from "react";
import CartComp from "../components/CartComp/CartComp";
import Container from "../components/Container";

function Cart() {
  return (
    <Container borderTop="1px solid #a00" borderColor={"#CACDD8"}>
      <CartComp />
    </Container>
  );
}

export default Cart;
