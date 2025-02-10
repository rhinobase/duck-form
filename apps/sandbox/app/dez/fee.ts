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
