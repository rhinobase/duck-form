"use client";
import React, {
  type PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from "react";
import { useStore } from "zustand";
import { type StoreType, createStore } from "./store.js";

const PageContext = createContext<ReturnType<typeof createStore> | null>(null);

export type PageContextProvider = PropsWithChildren<{ context: unknown }>;

export function PageContextProvider({
  children,
  context,
}: PageContextProvider) {
  const store = useRef(createStore(context)).current;
  return <PageContext.Provider value={store}>{children}</PageContext.Provider>;
}

export function usePageContext<T>(selector: (state: StoreType) => T): T {
  const store = useContext(PageContext);

  if (!store) throw new Error("Missing PageContext.Provider in the tree");

  return useStore(store, selector);
}
