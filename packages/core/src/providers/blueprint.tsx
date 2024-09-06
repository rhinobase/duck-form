import { WeaverProvider } from "@fibr/react";
import { type PropsWithChildren, createContext, useContext } from "react";

type BlueprintContextType<T = unknown> = {
	readonly schema: T;
};

const BlueprintContext = createContext<BlueprintContextType | null>(null);

export type BlueprintProvider = PropsWithChildren<BlueprintContextType> &
	Pick<WeaverProvider, "wrapper">;
export function BlueprintProvider({
	children,
	schema,
	wrapper,
}: BlueprintProvider) {
	const component = (
		<BlueprintContext.Provider value={{ schema }}>
			{children}
		</BlueprintContext.Provider>
	);

	if (wrapper)
		return <WeaverProvider wrapper={wrapper}>{component}</WeaverProvider>;

	return component;
}

export const useBlueprint = () => useContext(BlueprintContext);
