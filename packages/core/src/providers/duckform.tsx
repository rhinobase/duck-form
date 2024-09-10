import {
	type PropsWithChildren,
	type ReactNode,
	createContext,
	useContext,
} from "react";
import type { DuckField } from "../components";
import { ComponentNotFound } from "../components/ComponentNotFound";

type DuckFormContextType = {
	readonly components: Record<string, () => ReactNode>;
	readonly resolver: (
		schema: Record<string, DuckField>,
		props: Record<string, unknown>,
	) => DuckField | undefined;
};

const DuckFormContext = createContext<DuckFormContextType | null>(null);

export type DuckForm = PropsWithChildren<Partial<DuckFormContextType>>;

const defaultResolver: DuckFormContextType["resolver"] = (schema, props) =>
	schema[String(props.name)];

export function DuckForm({ children, components = {}, resolver }: DuckForm) {
	const value = {
		components: { default: ComponentNotFound, ...components },
		resolver: resolver ?? defaultResolver,
	};

	return (
		<DuckFormContext.Provider value={value}>
			{children}
		</DuckFormContext.Provider>
	);
}

export function useDuckForm() {
	const context = useContext(DuckFormContext);

	if (!context) throw new Error("Missing DuckFormContext.Provider in the tree");

	return context;
}
