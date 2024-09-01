import { store } from "../../store";

export const POST = () => {
  console.log(store); // store should have an onUpdate method
  store.update("test");

  return Response.json({ text: "Hello world" });
};
