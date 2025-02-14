import { create } from "zustand";
import { PageContext, type PageContextOptions } from "./utils.js";

export type StoreType = {
  context: unknown;
  update: (key: string, value: unknown) => void;
};

export const createStore = (context: PageContextOptions) => {
  const pageContext = new PageContext(context);

  return create<StoreType>((set) => ({
    context: pageContext.context,
    update: (key, value) =>
      set(() => {
        pageContext.update(key, String(value));
        return { context: pageContext.context };
      }),
  }));
};
