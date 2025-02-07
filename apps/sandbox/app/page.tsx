"use client";
import { Blueprint, DuckField, DuckForm } from "duck-form";
import { components } from "./config";
import { schema } from "./schema";

export default function HomePage() {
  return (
    <DuckForm
      components={components}
      generateId={(_, props) => (props.id ? String(props.id) : undefined)}
    >
      <Blueprint schema={schema}>
        {Object.keys(schema).map((key) => (
          <DuckField key={key} id={key} />
        ))}
      </Blueprint>
    </DuckForm>
  );
}
