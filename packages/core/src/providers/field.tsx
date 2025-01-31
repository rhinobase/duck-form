import { type PropsWithChildren, createContext, useContext } from "react";
import type { DuckField } from "../components";

// biome-ignore lint/suspicious/noExplicitAny: Context is generic
const FieldContext = createContext<DuckField<any> | null>(null);

export type FieldProvider<T extends DuckField> = PropsWithChildren<
  DuckField<T>
>;

export function FieldProvider<T extends DuckField>({
  children,
  ...values
}: FieldProvider<T>) {
  return (
    <FieldContext.Provider value={values}>{children}</FieldContext.Provider>
  );
}

export function useField<T extends DuckField>() {
  const context = useContext<T | null>(FieldContext);

  if (!context) throw new Error("Missing FieldContext.Provider in the tree");

  return context;
}
