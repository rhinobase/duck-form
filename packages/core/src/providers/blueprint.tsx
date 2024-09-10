import {
  type PropsWithChildren,
  type ReactNode,
  createContext,
  useContext,
} from "react";
import type { DuckField } from "../components";

type BlueprintContextType<T extends Record<string, unknown>> = {
  readonly schema: Record<string, DuckField<T>>;
  readonly wrapper?: (props: PropsWithChildren) => ReactNode;
};

// biome-ignore lint/suspicious/noExplicitAny: Context is generic
const BlueprintContext = createContext<BlueprintContextType<any> | null>(null);

export type Blueprint<T extends Record<string, unknown>> = PropsWithChildren<
  BlueprintContextType<T>
>;

export function Blueprint<T extends Record<string, unknown>>({
  children,
  ...value
}: Blueprint<T>) {
  return (
    <BlueprintContext.Provider value={value}>
      {children}
    </BlueprintContext.Provider>
  );
}

export function useBlueprint<T extends Record<string, unknown>>() {
  const context = useContext<BlueprintContextType<T> | null>(BlueprintContext);

  if (!context)
    throw new Error("Missing BlueprintContext.Provider in the tree");

  return context;
}
