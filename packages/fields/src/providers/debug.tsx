"use client";
import { type PropsWithChildren, createContext, useContext } from "react";

type DebugContextType = { isDebug: boolean };

const DebugContext = createContext<DebugContextType | null>(null);

export type DebugProvider = {
  isDebug?: boolean;
};

export const DebugProvider = (props: PropsWithChildren<DebugProvider>) => {
  return (
    <DebugContext.Provider value={{ isDebug: props.isDebug ?? false }}>
      {props.children}
    </DebugContext.Provider>
  );
};

export const useDebug = () => useContext(DebugContext);
