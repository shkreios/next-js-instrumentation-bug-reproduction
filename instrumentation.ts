/* eslint-disable no-restricted-properties */
/* eslint-disable turbo/no-undeclared-env-vars */
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./store-listener"); // registering the store listener when runtime is nodejs
  }
}
