import { create } from "zustand";

export type StoreType = {
  context: unknown;
  update: (key: string, value: unknown) => void;
};

export const createStore = (context: unknown) =>
  create<StoreType>((set) => ({
    context,
    update: (key, value) =>
      console.log("Updating - ", key, value) ,
  }));
