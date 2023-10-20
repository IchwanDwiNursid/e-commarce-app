import { createStore } from "redux";

// reducer

const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store 'untuk memanggil reducer'

const store = createStore(cartReducer);
console.log("onecreate store :", store.getState());

// subscribe 'untuk melihat perubahan di store'

store.subscribe(() => {
  console.log("STORE CHANGE :", store.getState());
});

// dispatch 'penugasaan'

const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 3, qty: 50 } };
store.dispatch(action2);
