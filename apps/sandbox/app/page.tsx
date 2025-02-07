"use client";
import { Blueprint, DuckField, DuckForm } from "duck-form";
import { components } from "./config";
import { schema } from "./schema";
import axios from "axios";

export default function HomePage() {
  const student = axios.get(
    "https://api.rhinobase.io/api/organisations/dez_erp/collections/student/6777952984427e9bd2beca47",
    {
      headers: {
        Authorization:
          "Bearer xG0oWsJJlm0YpdDvGjKxtLDy8h9kRjKjjwQGo5FZerrWh1YHN3X57nUvjiyYstUm0Cc3bvbBtezHp3DYInYanjUbOpr5zJfCrN_gZXLHr8fQ",
      },
    }
  );

  const data = {
    c: {
      queries: {
        student,
      },
    },
  };

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
