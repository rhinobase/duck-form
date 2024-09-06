import { FibrProvider, WeaverProvider } from "@fibr/react";

export function DyForm({
	children,
	plugins,
	wrapper,
}: FibrProvider & Pick<WeaverProvider, "wrapper">) {
	const component = <FibrProvider plugins={plugins}>{children}</FibrProvider>;

	if (wrapper)
		return <WeaverProvider wrapper={wrapper}>{component}</WeaverProvider>;

	return component;
}
