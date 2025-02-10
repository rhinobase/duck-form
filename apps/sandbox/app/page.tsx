import { Blueprint, DuckField, DuckForm } from "duck-form";
import { components } from "./config";
import { applicationFormSchema } from "./dez";
import axios from "axios";
import nunjucks from "nunjucks";

export default async function HomePage() {
  const student = await axios
    .get(
      "https://api.rhinobase.io/api/organisations/dez_erp/collections/application_form/679737515a9c3a3b8cddd53d",
      {
        headers: {
          Authorization: `Bearer ${process.env.USER_TOKEN}`,
        },
      },
    )
    .then((res) => res.data);

  const context = {
    c: {
      queries: {
        student,
      },
    },
  };

  const renderedValue = JSON.parse(
    nunjucks.renderString(JSON.stringify(applicationFormSchema), context),
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
