import { Blueprint, DuckField, DuckForm, PageContextProvider } from "duck-form";
import { components } from "./config";
import { schema } from "./sample/test";
import { ShowContext } from "./ShowContext";
import { TooltipWrapper } from "@rhinobase/shared";

export default async function HomePage() {
  const context = {
    // queries: await queries(),
    schema,
  };

  return (
    <PageContextProvider context={context}>
      <DuckForm
        components={components}
        // generateId={(_, props) => (props.id ? String(props.id) : undefined)}
      >
        <Blueprint schema={schema} wrapper={TooltipWrapper}>
          {Object.keys(schema).map((key) => (
            <DuckField key={key} id={key} />
          ))}
        </Blueprint>
      </DuckForm>
      <ShowContext />
    </PageContextProvider>
  );
}
