import axios from "axios";
import dayjs from "dayjs";
import { Blueprint, DuckField, DuckForm } from "duck-form";
import nunjucks from "nunjucks";
import { components } from "./config";
import { fee } from "./dez";

export const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
}).format;

const MODE = {
  A: "Cash",
  B: "Cheque",
  C: "Bank Transfer",
  D: "UPI",
};

type DataStructure = {
  _nid: number;
  amount: number;
  bus_amount?: number;
  fine: number;
  concession: number;
  mode: keyof typeof MODE;
  remark: string;
  sessions: {
    session: {
      _id: string;
      name: string;
      installments: {
        name: string;
        amount: number;
      }[];
    };
    installments: {
      index: number;
      deposit: number;
      status: boolean;
    }[];
  }[];
  student: {
    sr: string;
    name: string;
    father_name: string;
    session: { name: string; type: "A" | "B" | "C" };
    section: string;
  };
  created_on: string;
  created_by: {
    first_name: string;
    last_name: string;
  };
};

export default async function HomePage() {
  const fees = await axios
    .post<{
      data: {
        fee: DataStructure;
      };
    }>(
      "https://api.rhinobase.io/api/organisations/dez_erp/graphql",
      {
        query: `{
        fee(_id: "67a9ad195a9c3a3b8cdde399") {
           _nid
           amount
           bus_amount
           fine
           concession
           mode
           remark
           sessions {
             session {
               _id
               name
               installments {
                 name
                 amount
               }
             }
             installments {
               index
               deposit
               status
             }
           }
           student {
             sr
             name
             father_name
             session {
               name
               type
             }
           }
           created_on
           created_by {
             ... on User {
                first_name
                last_name
            }
            ... on Token {
                name
            }
           }
         }
       }`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      const data = res.data?.data?.fee;

      return {
        ...data,
        created_on: dayjs(data.created_on).format("D MMM YYYY"),
        total_amount: currencyFormatter(
          data.amount + Number(data.bus_amount ?? 0) + data.fine
        ),
        fine: currencyFormatter(data.fine),
        concession: currencyFormatter(data.concession),
        net_amount: currencyFormatter(
          data.amount + data.concession + Number(data.bus_amount ?? 0)
        ),
        mode: MODE[data.mode],
        sessions: data.sessions.flatMap((i) =>
          i.installments.map((item) => {
            const index = i.session.installments.findIndex(
              (_, index) => index === item.index
            );
            const installments = {
              name: i.session.installments[index]?.name ?? "",
              amount: currencyFormatter(
                i.session.installments[index]?.amount ?? 0
              ),
            };

            return {
              ...item,
              deposit: currencyFormatter(item.deposit),
              ...installments,
            };
          })
        ),
      };
    });

  const context = {
    c: {
      queries: {
        fees,
      },
    },
  };

  const renderedValue = JSON.parse(
    nunjucks.renderString(JSON.stringify(fee), context)
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
