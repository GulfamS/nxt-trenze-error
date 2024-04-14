import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeAllCartItem: () => {},
  increamentCartQuantity: () => {},
  decreamentCartQuantity: () => {},
})

export default CartContext
