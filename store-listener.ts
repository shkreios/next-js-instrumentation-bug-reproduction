import { store } from "./app/store";

// Centralized place to listen for store updates
// For example to send updates to a WebSocket

// @ts-ignore
store.onUpdate = (item) => {
  // Do something with the updated item
  console.log(item);
};

console.log("Store listener is ready", store); // store will have an onUpdate method
