import { useField } from "../providers/field";

export function ComponentNotFound() {
  const options = useField();

  if (options.type === "default")
    return (
      <p>
        Unable to render component with props{" "}
        <code>{JSON.stringify(options)}</code>
      </p>
    );

  return (
    <p>
      Component of type <kbd>{options.type}</kbd> doesn't exist!
    </p>
  );
}
