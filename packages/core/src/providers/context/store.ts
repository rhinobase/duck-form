import { create } from "zustand";
import {
  type SchemaType,
  PageContext,
  type PageContextOptions,
} from "./utils.js";

export type StoreType = {
  context: unknown;
  register: (block: SchemaType & { id: string }) => void;
  update: (key: string, value: unknown) => void;
};

export const createStore = (context: PageContextOptions) => {
  const pageContext = new PageContext(context);

  return create<StoreType>((set) => ({
    context: pageContext.context,
    register: (block) =>
      set(() => {
        pageContext.register(block);
        return { context: pageContext.context };
      }),
    update: (key, value) =>
      set(() => {
        pageContext.update(key, String(value));
        return { context: pageContext.context };
      }),
  }));
};
