const reducer = (state, action) => {
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false };
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'CLEAR_CART') return { ...state, cart: [] };
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (action.payload === cartItem.id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });

    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (action.payload === cartItem.id) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => {
        return cartItem.amount !== 0;
      });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (totalCart, cartItem) => {
        let total = totalCart.total + cartItem.amount * cartItem.price;
        let amount = totalCart.amount + cartItem.amount;

        return { total, amount };
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  return state;
};

export default reducer;
