import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

//----------bikin reducer----------

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

//--------bikin store-------------

const store = configureStore({
  // bisa untuk byk reducer
  reducer: {
    cart: cartReducer,
  },
});
//---------bikin subscribe/Menampilkan isi dari store-----------
console.log("onecreate store :", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE :", store.getState());
});

//---------bikin dispatch / penugasan-----------
const action1 = addToCart({ id: 1, qty: 20 });
store.dispatch(action1);
