import {
  type PropsWithChildren,
  type ReactNode,
  createContext,
  useContext,
} from "react";
import { ComponentNotFound } from "../components/ComponentNotFound";

type DuckFormContextType = {
  readonly components: Record<string, () => ReactNode>;
  resolverKey: string;
};

const DuckFormContext = createContext<DuckFormContextType | null>(null);

export type DuckForm = PropsWithChildren<Partial<DuckFormContextType>>;

export function DuckForm({
  children,
  components = {},
  resolverKey = "id",
}: DuckForm) {
  const value = {
    components: { default: ComponentNotFound, ...components },
    resolverKey,
  };

  return (
    <DuckFormContext.Provider value={value}>
      {children}
    </DuckFormContext.Provider>
  );
}

export function useDuckForm() {
  const context = useContext<DuckFormContextType | null>(DuckFormContext);

  if (!context) throw new Error("Missing DuckFormContext.Provider in the tree");

  return context;
}
