import axios from "axios";
import dayjs from "dayjs";
import { currencyFormatter } from "../utils";

export const schema = {
  fragment1: {
    type: "fragment",
    blocks: {
      div1: {
        type: "div",
        className: {
          type: "literal",
          value: "flex items-center justify-between",
        },
        blocks: {
          image1: {
            type: "image",
            src: { type: "script", value: "{{ c.logo }}" },
            alt: { type: "literal", value: "brand_logo" },
            width: { type: "literal", value: "100" },
            height: { type: "literal", value: "100" },
            className: {
              type: "literal",
              value: "h-[60px] w-[100px] object-cover",
            },
          },
          div2: {
            type: "div",
            className: { type: "literal", value: "text-center" },
            blocks: {
              h31: {
                type: "h3",
                className: {
                  type: "literal",
                  value: "text-center text-xl font-bold",
                },
                blocks: {
                  text1: { type: "literal", value: "Dezyne École College" },
                },
              },
              p1: {
                type: "p",
                className: {
                  type: "literal",
                  value: "text-center text-sm",
                },
                blocks: {
                  text2: {
                    type: "literal",
                    value:
                      "Unit of Suraj Narayan Uchh Takniki Shikshan Sansthan",
                  },
                },
              },
              p2: {
                type: "p",
                className: {
                  type: "literal",
                  value: "text-center text-xs",
                },
                blocks: {
                  text3: {
                    type: "literal",
                    value:
                      "106/10, Civil Lines, Ajmer - 305001 | 0145-2624679, 09829024839 | www.dezyneecole.com",
                  },
                },
              },
            },
          },
          div3: {
            type: "div",
            className: { type: "literal", value: "h-[75px] w-[75px]" },
          },
        },
      },
      div4: {
        type: "div",
        className: {
          type: "literal",
          value: "mt-6 grid grid-cols-3 text-sm",
        },
        blocks: {
          p3: {
            type: "p",
            blocks: {
              script1: {
                type: "script",
                value: "Receipt No - {{ c.queries.fees._nid }}",
              },
            },
          },
          p4: {
            type: "p",
            blocks: {
              script2: {
                type: "script",
                value: "Date - {{ c.queries.fees.created_on }}",
              },
            },
          },
          p5: {
            type: "p",
            blocks: {
              script3: {
                type: "script",
                value: "Scholar No - {{ c.queries.fees.student.sr }}",
              },
            },
          },
          p6: {
            type: "p",
            blocks: {
              script4: {
                type: "script",
                value: "Name - {{ c.queries.fees.student.name }}",
              },
            },
          },
          p7: {
            type: "p",
            blocks: {
              script5: {
                type: "script",
                value:
                  "Father&apos;s Name - {{ c.queries.fees.student.father_name }}",
              },
            },
          },
          p8: {
            type: "p",
            blocks: {
              script6: {
                type: "script",
                value: "{{ c.queries.fees.student.session.name }}",
              },
            },
          },
        },
      },
      table1: {
        type: "data_table",
        className: { type: "literal", value: "mt-6 w-full" },
        size: { type: "literal", value: "sm" },
        variant: { type: "literal", value: "striped" },
        columns: {
          type: "literal",
          value: ["Fee Heads", "Installment", "Deposited"],
        },
        data: {
          type: "script",
          value: `[
    {
    "name": "Tuition Fees",
    "amount": "₹15,000",
    "deposit": "₹15,000",
    }
]`,
        },
      },
      table2: {
        type: "table",
        className: {
          type: "literal",
          value:
            "divide-secondary-300 dark:divide-secondary-700 w-full divide-y",
        },
        blocks: {
          tbody1: {
            type: "tbody",
            blocks: {
              tr1: {
                type: "tr",
                className: {
                  type: "literal",
                  value:
                    "font-bold even:bg-secondary-100 dark:even:bg-secondary-800",
                },
                blocks: {
                  td1: {
                    type: "td",
                    colSpan: { type: "literal", value: "2" },
                    className: {
                      type: "literal",
                      value:
                        "text-secondary-600 dark:text-secondary-300 px-2 py-1.5 text-xs truncate whitespace-nowrap",
                    },
                    blocks: {
                      text1: {
                        type: "literal",
                        value: "Total Amount Deposited",
                      },
                    },
                  },
                  td2: {
                    type: "td",
                    className: {
                      type: "literal",
                      value:
                        "text-secondary-600 dark:text-secondary-300 px-2 py-1.5 text-xs truncate whitespace-nowrap",
                    },
                    blocks: {
                      script1: {
                        type: "script",
                        value: "{{ c.queries.fees.total_amount }}",
                      },
                    },
                  },
                },
              },
              tr2: {
                type: "tr",
                className: {
                  type: "literal",
                  value: "even:bg-secondary-100 dark:even:bg-secondary-800",
                },
                blocks: {
                  td3: {
                    type: "td",
                    className: {
                      type: "literal",
                      value:
                        "text-secondary-600 dark:text-secondary-300 px-2 py-1.5 text-xs truncate whitespace-nowrap",
                    },
                    blocks: {
                      script2: {
                        type: "script",
                        value:
                          "'{{ c.queries.fees.fine[1] }}' > 0 ? `Fine - {{ c.queries.fees.fine }}` : ''",
                      },
                    },
                  },
                  td4: {
                    type: "td",
                    className: {
                      type: "literal",
                      value:
                        "text-secondary-600 dark:text-secondary-300 px-2 py-1.5 text-xs truncate whitespace-nowrap",
                    },
                    blocks: {
                      script3: {
                        type: "script",
                        value:
                          "'{{ c.queries.fees.concession[1] }}' > 0 ? `Concession - {{ c.queries.fees.concession }}`: ''",
                      },
                    },
                  },
                  td5: {
                    type: "td",
                    className: {
                      type: "literal",
                      value:
                        "text-secondary-600 dark:text-secondary-300 px-2 py-1.5 text-xs truncate whitespace-nowrap",
                    },
                    blocks: {
                      div1: {
                        type: "div",
                        className: {
                          type: "literal",
                          value: "flex w-full items-center justify-between",
                        },
                        blocks: {
                          text2: { type: "literal", value: "Net Fees -" },
                          span1: {
                            type: "span",
                            className: { type: "literal", value: "font-bold" },
                            blocks: {
                              script4: {
                                type: "script",
                                value: "{{ c.queries.fees.net_amount }}",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      div6: {
        type: "div",
        className: { type: "literal", value: "flex justify-between" },
        blocks: {
          div7: {
            type: "div",
            blocks: {
              p9: {
                type: "p",
                blocks: {
                  script11: {
                    type: "script",
                    value: "Mode - {{ c.queries.fees.mode }}",
                  },
                },
              },
              p10: {
                type: "p",
                className: {
                  type: "script",
                  value:
                    "('{{ c.queries.fees.remark }}' || '{{ c.queries.fees.mode }}' === 'Cheque') ? 'mt-1' : 'hidden'",
                },
                blocks: {
                  script12: {
                    type: "script",
                    value:
                      "`Remark - {{ c.queries.fees.remark }} ? `{{ c.queries.fees.remark }}\n` : ''}{{ c.queries.fees.mode }} === 'Cheque' ? 'Fee payment made through cheque will be consider after cheque clearness.': ''}`",
                  },
                },
              },
            },
          },
          p11: {
            type: "p",
            className: { type: "literal", value: "mt-8 text-center" },
            blocks: {
              script13: {
                type: "script",
                value:
                  "{{ c.queries.fees.created_by.first_name }}  {{ c.queries.fees.created_by.last_name }}",
              },
              br1: { type: "br" },
              span2: {
                type: "span",
                className: { type: "literal", value: "text-secondary-500" },
                blocks: { text6: { type: "literal", value: "(Cashier)" } },
              },
            },
          },
        },
      },
    },
  },
};

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

export const queries = async () => {
  const data = await axios
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

  return {
    fees: data,
  };
};
