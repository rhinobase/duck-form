import { Blueprint, DuckField, DuckForm } from "duck-form";
import { PageContextProvider } from "@rhinobase/shared";
import { components } from "./config";
import { queries, schema } from "./dez/application_form";

export default async function HomePage() {
  const context = {
    queries: await queries(),
  };

  return (
    <PageContextProvider context={context}>
      <DuckForm
        components={components}
        // generateId={(_, props) => (props.id ? String(props.id) : undefined)}
      >
        <Blueprint schema={schema}>
          {Object.keys(schema).map((key) => (
            <DuckField key={key} id={key} />
          ))}
        </Blueprint>
      </DuckForm>
    </PageContextProvider>
  );
}
