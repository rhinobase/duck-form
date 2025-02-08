import { Blueprint, DuckField, DuckForm } from "duck-form";
import { components } from "./config";
import { schema } from "./schema";
import axios from "axios";
import nunjucks from "nunjucks";

export default async function HomePage() {
  const student = await axios
    .get(
      "https://api.rhinobase.io/api/organisations/dez_erp/collections/student/6777952984427e9bd2beca47",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImJaLV81ZyJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS9hbGNhbnRhcmEtaW8iLCJuYW1lIjoiQWRpdHlhIE1hdGh1ciIsImF1ZCI6ImFsY2FudGFyYS1pbyIsImF1dGhfdGltZSI6MTczODkwMTA1OSwidXNlcl9pZCI6Ing0cnJmalFyak9YQmpybnJxWHJKeDFtZmR2dDEiLCJzdWIiOiJ4NHJyZmpRcmpPWEJqcm5ycVhySngxbWZkdnQxIiwiaWF0IjoxNzM4OTAxMDYwLCJleHAiOjE3Mzk1MDU4NjAsImVtYWlsIjoibWF0aHVyYWRpdHlhNzI0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtYXRodXJhZGl0eWE3MjRAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.y4LKfIo_oF22eliRPPS2P76mAjIfo5QQHO6a5O_fYaNHwqQuPcphJ1Ja38SXbyA_Hh0KljIQbFeOX4XGNWlVlEHKMMdWcdqF_7Yg5r3kcmiCekiCk_NlbgAiI-xzAXR28lUQMAzCaJjXwDk0PZavmyQox7-BeyoDoX9nDM0X6jvsitibTXIq-x23VNMG92fJZdDJUTlAXtkIa2GqOYz3lC7ckiA12tN5yaT_7p6WJnJ4Mk0kMvahVDjO3rOObTXO1l4bvbETzObdmwPVxkZJKJFNgJHtm-Q12lzTvwUm-POtW5rizCDVRIwi4wLzi2iWWW2sqkJ6bjEimbOuT3H2vg",
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
    nunjucks.renderString(JSON.stringify(schema), context),
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
