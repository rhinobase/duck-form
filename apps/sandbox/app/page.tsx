import { Blueprint, DuckField, DuckForm } from "duck-form";
import nunjucks from "nunjucks";
import { components } from "./config";
import { queries, schema } from "./dez/fee";

export default async function HomePage() {
  const context = {
    c: {
      queries: queries(),
    },
  };

  const renderedValue = JSON.parse(
    nunjucks.renderString(JSON.stringify(schema), context)
  );

  return (
    <DuckForm
      components={components}
      // generateId={(_, props) => (props.id ? String(props.id) : undefined)}
    >
      <Blueprint schema={renderedValue}>
        {Object.keys(renderedValue).map((key) => (
          <DuckField key={key} id={key} />
        ))}
      </Blueprint>
    </DuckForm>
  );
}
