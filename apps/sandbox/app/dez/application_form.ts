import axios from "axios";

export const schema = {
  fragment1: {
    type: "fragment",
    blocks: {
      p1: {
        type: "p",
        className: { type: "literal", value: "mb-1" },
        blocks: {
          script1: {
            type: "script",
            value:
              "`R/${new Date({{ c.queries.student.created_on }}).getFullYear()}/${String({{ c.queries.student._nid }}).padStart(4, '0')}`",
          },
        },
      },
      div1: {
        type: "div",
        className: { type: "literal", value: "flex justify-between" },
        blocks: {
          div2: {
            type: "div",
            className: { type: "literal", value: "flex w-max flex-col" },
            blocks: {
              image1: {
                type: "image",
                // src: { type: "script", value: "{{ c.logo }}" },
                alt: { type: "literal", value: "Dezyne Ecole College" },
                width: { type: "literal", value: "100" },
                height: { type: "literal", value: "100" },
                className: {
                  type: "literal",
                  value: "h-[60px] w-[100px] object-cover",
                },
              },
              p2: {
                type: "p",
                className: {
                  type: "literal",
                  value: "mt-1 text-center text-xs font-semibold leading-3",
                },
                blocks: {
                  text1: { type: "literal", value: "Today A Reader" },
                },
              },
              p3: {
                type: "p",
                className: {
                  type: "literal",
                  value: "text-center text-xs font-semibold leading-3",
                },
                blocks: {
                  text2: { type: "literal", value: "Tommorrow A Leader" },
                },
              },
            },
          },
          div3: {
            type: "div",
            className: { type: "literal", value: "text-center" },
            blocks: {
              h21: {
                type: "h2",
                className: {
                  type: "literal",
                  value: "text-3xl font-semibold",
                },
                blocks: {
                  text3: { type: "literal", value: "Dezyne École College" },
                },
              },
              p4: {
                type: "p",
                className: {
                  type: "literal",
                  value: "text-sm leading-tight",
                },
                blocks: {
                  text4: {
                    type: "literal",
                    value:
                      "Unit of Suraj Narayan Uchh Takniki Shikshan Sansthan",
                  },
                },
              },
              p5: {
                type: "p",
                className: { type: "literal", value: "text-sm" },
                blocks: {
                  text5: {
                    type: "literal",
                    value: "0145-2624679, 09829024839 | www.dezyneecole.com",
                  },
                },
              },
              h31: {
                type: "h3",
                className: {
                  type: "literal",
                  value:
                    "mx-auto mt-2 w-max rounded-md bg-[#2ecc71] px-2.5 py-1 text-2xl font-medium",
                },
                blocks: {
                  text6: { type: "literal", value: "Admission Form" },
                },
              },
            },
          },
          div4: {
            type: "div",
            className: {
              type: "literal",
              value: "h-[150px] w-[150px] border",
            },
          },
        },
      },
      p6: {
        type: "p",
        blocks: {
          literal1: { type: "literal", value: "For admission in " },
          span1: {
            type: "span",
            className: { type: "literal", value: "font-semibold" },
            blocks: {
              script2: {
                type: "script",
                value: "{{ c.queries.student.course.title }}",
              },
            },
          },
        },
      },
      table1: {
        type: "table",
        variant: { type: "literal", value: "simple" },
        size: { type: "literal", value: "sm" },
        className: { type: "literal", value: "w-full" },
        blocks: {
          tbody1: {
            type: "tbody",
            blocks: {
              tr1: {
                type: "tr",
                blocks: {
                  td1: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: { text7: { type: "literal", value: "Name" } },
                  },
                  td2: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      script3: {
                        type: "script",
                        value: "{{ c.queries.student.name }}",
                      },
                    },
                  },
                },
              },
              tr2: {
                type: "tr",
                blocks: {
                  td3: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text8: { type: "literal", value: "Father's Name" },
                    },
                  },
                  td4: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      script4: {
                        type: "script",
                        value: "{{ c.queries.student.father_name }}",
                      },
                    },
                  },
                },
              },
              tr3: {
                type: "tr",
                blocks: {
                  td5: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    colSpan: { type: "literal", value: "2" },
                    blocks: {
                      text9: {
                        type: "literal",
                        value: "Father's Profession",
                      },
                    },
                  },
                },
              },
              tr4: {
                type: "tr",
                blocks: {
                  td6: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    colSpan: { type: "literal", value: "2" },
                    blocks: {
                      text10: { type: "literal", value: "Mother's Name" },
                    },
                  },
                },
              },
              tr5: {
                type: "tr",
                blocks: {
                  td7: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text11: {
                        type: "literal",
                        value: "Mother's Profession",
                      },
                    },
                  },
                  td8: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                  },
                },
              },
              tr6: {
                type: "tr",
                blocks: {
                  td9: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text12: {
                        type: "literal",
                        value: "Parent / Guardian Name",
                      },
                    },
                  },
                  td10: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                  },
                },
              },
              tr7: {
                type: "tr",
                blocks: {
                  td11: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text13: { type: "literal", value: "Gender" },
                    },
                  },
                  td12: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      div5: {
                        type: "div",
                        className: {
                          type: "literal",
                          value: "flex items-center gap-2",
                        },
                        blocks: {
                          div6: {
                            type: "div",
                            className: {
                              type: "literal",
                              value: "flex items-center gap-1 text-sm",
                            },
                            blocks: {
                              boolean1: {
                                type: "boolean",
                                disabled: { type: "literal", value: true },
                                size: { type: "literal", value: "sm" },
                              },
                              text14: { type: "literal", value: "Male" },
                            },
                          },
                          div7: {
                            type: "div",
                            className: {
                              type: "literal",
                              value: "flex items-center gap-1 text-sm",
                            },
                            blocks: {
                              boolean2: {
                                type: "boolean",
                                disabled: { type: "literal", value: true },
                                size: { type: "literal", value: "sm" },
                              },
                              text15: { type: "literal", value: "Female" },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              tr8: {
                type: "tr",
                blocks: {
                  td13: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text16: { type: "literal", value: "Date of Birth" },
                    },
                  },
                  td14: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      div8: {
                        type: "div",
                        className: {
                          type: "literal",
                          value: "flex items-center gap-6",
                        },
                        blocks: {
                          Pin1: {
                            type: "Pin",
                            placeholder: { type: "literal", value: "D" },
                            length: { type: "literal", value: "2" },
                          },
                          Pin2: {
                            type: "Pin",
                            placeholder: { type: "literal", value: "M" },
                            length: { type: "literal", value: "2" },
                          },
                          Pin3: {
                            type: "Pin",
                            placeholder: { type: "literal", value: "Y" },
                            length: { type: "literal", value: "4" },
                          },
                        },
                      },
                    },
                  },
                },
              },
              tr9: {
                type: "tr",
                blocks: {
                  td15: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text17: { type: "literal", value: "Aadhar Card No" },
                    },
                  },
                  td16: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      Pin4: {
                        type: "Pin",
                        value: { type: "literal", value: "" },
                        length: { type: "literal", value: "12" },
                      },
                    },
                  },
                },
              },
              tr10: {
                type: "tr",
                blocks: {
                  td17: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text18: { type: "literal", value: "Category" },
                    },
                  },
                  td18: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      div9: {
                        type: "div",
                        className: {
                          type: "literal",
                          value: "flex items-center gap-2",
                        },
                        blocks: {
                          div10: {
                            type: "div",
                            className: {
                              type: "literal",
                              value: "flex items-center gap-1 text-sm",
                            },
                            blocks: {
                              boolean3: {
                                type: "boolean",
                                disabled: { type: "literal", value: true },
                                size: { type: "literal", value: "sm" },
                              },
                              text19: { type: "literal", value: "GEN" },
                            },
                          },
                          div11: {
                            type: "div",
                            className: {
                              type: "literal",
                              value: "flex items-center gap-1 text-sm",
                            },
                            blocks: {
                              boolean4: {
                                type: "boolean",
                                disabled: { type: "literal", value: true },
                                size: { type: "literal", value: "sm" },
                              },
                              text20: { type: "literal", value: "SC" },
                            },
                          },
                          div12: {
                            type: "div",
                            className: {
                              type: "literal",
                              value: "flex items-center gap-1 text-sm",
                            },
                            blocks: {
                              boolean5: {
                                type: "boolean",
                                disabled: { type: "literal", value: true },
                                size: { type: "literal", value: "sm" },
                              },
                              text21: { type: "literal", value: "ST" },
                            },
                          },
                          div13: {
                            type: "div",
                            className: {
                              type: "literal",
                              value: "flex items-center gap-1 text-sm",
                            },
                            blocks: {
                              boolean6: {
                                type: "boolean",
                                disabled: { type: "literal", value: true },
                                size: { type: "literal", value: "sm" },
                              },
                              text22: { type: "literal", value: "OBC" },
                            },
                          },
                          div14: {
                            type: "div",
                            className: {
                              type: "literal",
                              value: "flex items-center gap-1 text-sm",
                            },
                            blocks: {
                              boolean7: {
                                type: "boolean",
                                disabled: { type: "literal", value: true },
                                size: { type: "literal", value: "sm" },
                              },
                              text23: { type: "literal", value: "SBC" },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              tr11: {
                type: "tr",
                blocks: {
                  td19: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text24: { type: "literal", value: "Religion" },
                    },
                  },
                  td20: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                  },
                },
              },
              tr12: {
                type: "tr",
                blocks: {
                  td21: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text25: {
                        type: "literal",
                        value: "Permanent Address",
                      },
                    },
                  },
                  td22: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                  },
                },
              },
              tr13: {
                type: "tr",
                blocks: {
                  td23: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text26: {
                        type: "literal",
                        value: "Correspondence Address",
                      },
                    },
                  },
                  td24: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                  },
                },
              },
              tr14: {
                type: "tr",
                blocks: {
                  td25: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text27: {
                        type: "literal",
                        value: "Phone No. (Landline)",
                      },
                    },
                  },
                  td26: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                  },
                },
              },
              tr15: {
                type: "tr",
                blocks: {
                  td27: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text28: { type: "literal", value: "Student Mobile" },
                    },
                  },
                  td28: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                  },
                },
              },
              tr16: {
                type: "tr",
                blocks: {
                  td29: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text29: { type: "literal", value: "Parents Mobile" },
                    },
                  },
                  td30: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                  },
                },
              },
              tr17: {
                type: "tr",
                blocks: {
                  td31: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                    blocks: {
                      text30: { type: "literal", value: "Email" },
                    },
                  },
                  td32: {
                    type: "td",
                    className: { type: "literal", value: "!px-1.5 py-2" },
                  },
                },
              },
            },
          },
        },
      },
      table2: {
        type: "table",
        size: { type: "literal", value: "sm" },
        variant: { type: "literal", value: "simple" },
        className: { type: "literal", value: "w-full" },
        blocks: {
          thead1: {
            type: "thead",
            blocks: {
              tr18: {
                type: "tr",
                blocks: {
                  th1: {
                    type: "th",
                    colSpan: { type: "literal", value: "8" },
                    className: { type: "literal", value: "text-center" },
                    blocks: {
                      text31: { type: "literal", value: "Academic Record" },
                    },
                  },
                },
              },
            },
          },
          thead2: {
            type: "thead",
            blocks: {
              tr19: {
                type: "tr",
                className: { type: "literal", value: "border-y" },
                blocks: {
                  th2: {
                    type: "th",
                    className: {
                      type: "literal",
                      value: "border-l border-r",
                    },
                    blocks: {
                      text32: {
                        type: "literal",
                        value: "Examination Level",
                      },
                    },
                  },
                  th3: {
                    type: "th",
                    className: {
                      type: "literal",
                      value: "border-r text-center",
                    },
                    blocks: {
                      text33: { type: "literal", value: "Board" },
                    },
                  },
                  th4: {
                    type: "th",
                    className: {
                      type: "literal",
                      value: "border-r text-center",
                    },
                    blocks: {
                      text34: { type: "literal", value: "School Name" },
                    },
                  },
                  th5: {
                    type: "th",
                    className: {
                      type: "literal",
                      value: "border-r text-center",
                    },
                    blocks: { text35: { type: "literal", value: "%" } },
                  },
                  th6: {
                    type: "th",
                    className: {
                      type: "literal",
                      value: "border-r text-center",
                    },
                    blocks: {
                      text36: { type: "literal", value: "Subject" },
                    },
                  },
                  th7: {
                    type: "th",
                    className: {
                      type: "literal",
                      value: "border-r text-center",
                    },
                    blocks: {
                      text37: { type: "literal", value: "Place" },
                    },
                  },
                  th8: {
                    type: "th",
                    className: {
                      type: "literal",
                      value: "border-r text-center",
                    },
                    blocks: { text38: { type: "literal", value: "Year" } },
                  },
                  th9: {
                    type: "th",
                    className: {
                      type: "literal",
                      value: "border-r text-center",
                    },
                    blocks: {
                      text39: {
                        type: "literal",
                        value: "Regular / Correspondence",
                      },
                    },
                  },
                },
              },
            },
          },
          tbody2: {
            type: "tbody",
            blocks: {
              tr20: {
                type: "tr",
                className: { type: "literal", value: "border-b border-l" },
                blocks: {
                  td33: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                    blocks: {
                      text40: { type: "literal", value: "X Class" },
                    },
                  },
                  td34: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td35: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td36: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td37: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td38: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td39: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td40: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                },
              },
              tr21: {
                type: "tr",
                className: { type: "literal", value: "border-b border-l" },
                blocks: {
                  td41: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                    blocks: {
                      text41: { type: "literal", value: "XII Class" },
                    },
                  },
                  td42: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td43: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td44: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td45: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td46: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td47: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                  td48: {
                    type: "td",
                    className: { type: "literal", value: "border-r" },
                  },
                },
              },
            },
          },
        },
      },
      div15: {
        type: "div",
        className: {
          type: "literal",
          value: "mt-9 flex items-center justify-between",
        },
        blocks: {
          div16: {
            type: "div",
            blocks: {
              div17: {
                type: "div",
                className: {
                  type: "literal",
                  value: "h-[1px] w-full bg-black",
                },
              },
              p7: {
                type: "p",
                className: { type: "literal", value: "text-sm" },
                blocks: {
                  text42: { type: "literal", value: "Student's Signature" },
                },
              },
            },
          },
          div18: {
            type: "div",
            blocks: {
              div19: {
                type: "div",
                className: {
                  type: "literal",
                  value: "h-[1px] w-full bg-black",
                },
              },
              p8: {
                type: "p",
                className: { type: "literal", value: "text-sm" },
                blocks: {
                  text43: { type: "literal", value: "Parent's Signature" },
                },
              },
            },
          },
        },
      },
      div20: {
        type: "div",
        className: { type: "literal", value: "break-after-page" },
      },
      h51: {
        type: "h5",
        className: {
          type: "literal",
          value:
            "my-1 text-center text-xl font-semibold uppercase text-[#1e4888]",
        },
        blocks: { text44: { type: "literal", value: "Declaration" } },
      },
      p9: {
        type: "p",
        className: { type: "literal", value: "mb-0.5 font-bold" },
        blocks: {
          text45: {
            type: "literal",
            value: "List of Enclose to be Submitted by Students -",
          },
        },
      },
      ol1: {
        type: "ol",
        className: { type: "literal", value: "list-inside list-decimal" },
        blocks: {
          li1: {
            type: "li",
            blocks: {
              text46: { type: "literal", value: "Photocopy of 10" },
              sup1: {
                type: "sup",
                blocks: { text47: { type: "literal", value: "th" } },
              },
              text48: { type: "literal", value: "Marksheet" },
            },
          },
          li2: {
            type: "li",
            blocks: {
              text49: { type: "literal", value: "Photocopy of 12" },
              sup2: {
                type: "sup",
                blocks: { text50: { type: "literal", value: "th" } },
              },
              text51: { type: "literal", value: "Marksheet" },
            },
          },
          li3: {
            type: "li",
            blocks: {
              text52: { type: "literal", value: "6 Passport Size Photos" },
            },
          },
          li4: {
            type: "li",
            blocks: {
              text53: { type: "literal", value: "Aadhar Card Copy" },
            },
          },
        },
      },
      p10: {
        type: "p",
        className: { type: "literal", value: "mb-0.5 mt-12 font-bold" },
        blocks: {
          text54: {
            type: "literal",
            value: "Needs to be Signed by Applicant",
          },
        },
      },
      ol2: {
        type: "ol",
        className: { type: "literal", value: "list-inside list-decimal" },
        blocks: {
          li5: {
            type: "li",
            blocks: {
              text55: {
                type: "literal",
                value:
                  "I hereby declare that I have Successfully completed my 10+2 and I have Submitted my 10+2 / Degree/ Diploma Certificate as evidence or as soon as my Result are Declared in this case. I Understand that if I Fail to Submit this proof within 30 Days of my Session Start at Dezyne École College my Admission Stands Cancelled.",
              },
            },
          },
          li6: {
            type: "li",
            blocks: {
              span2: {
                type: "span",
                blocks: {
                  text56: {
                    type: "literal",
                    value:
                      "I understand that before starting professional practice (Training)",
                  },
                },
              },
              ul1: {
                type: "ul",
                className: {
                  type: "literal",
                  value: "list-inside list-disc",
                },
                blocks: {
                  li7: {
                    type: "li",
                    blocks: {
                      text57: {
                        type: "literal",
                        value:
                          "Must have an Aggregate of 60% at the end of each semester / Year of Degree/ Master Program Complete till them",
                      },
                    },
                  },
                  li8: {
                    type: "li",
                    blocks: {
                      text58: {
                        type: "literal",
                        value: "Should be less than 25 Years of age",
                      },
                    },
                  },
                  li9: {
                    type: "li",
                    blocks: {
                      text59: {
                        type: "literal",
                        value:
                          "Should have submitted a copy of Resume, Photograph and Portfolio ( Designing) as per Requirement of Industry.",
                      },
                    },
                  },
                },
              },
            },
          },
          li10: {
            type: "li",
            blocks: {
              text60: {
                type: "literal",
                value:
                  "I understand that my Professional Practice may be anywhere in India or Abroad and that my Travel, Boarding and lodging expenses shall be born entirely by me. I understand and agree that besides that rules mentioned as part of 'Student Obligations' given to me, the above Rules are also applicable to me. I agree to Abide by the above Rules.",
              },
            },
          },
          li11: {
            type: "li",
            blocks: {
              text61: {
                type: "literal",
                value: "Students Obligations Rules given to students.",
              },
            },
          },
        },
      },
      div21: {
        type: "div",
        className: { type: "literal", value: "mt-12" },
        blocks: {
          div22: {
            type: "div",
            className: {
              type: "literal",
              value: "h-[1px] w-full max-w-[150px] bg-black",
            },
          },
          p11: {
            type: "p",
            className: { type: "literal", value: "text-sm" },
            blocks: {
              text62: { type: "literal", value: "Student's Signature" },
            },
          },
        },
      },
    },
  },
};

export const queries = async () => {
  const data = await axios
    .get(
      "https://api.rhinobase.io/api/organisations/dez_erp/collections/application_form/679737515a9c3a3b8cddd53d",
      {
        headers: {
          Authorization: `Bearer ${process.env.USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    )
    .then((res) => res.data);

  return {
    student: data,
  };
};
