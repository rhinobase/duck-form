"use client";
import { usePageContext } from "duck-form";

export function ShowContext() {
  const { context } = usePageContext((state) => state);

  return <pre>{JSON.stringify(context, null, 2)}</pre>;
}
