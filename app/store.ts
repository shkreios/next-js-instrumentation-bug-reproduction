export const store = {
  update(item) {
    if (this.onUpdate) {
      this.onUpdate(item);
    }
  },
};
