import axios from "axios";

export const schema = {
  type: "fragment",
  blocks: {
    p1: {
      type: "p",
      className: "mb-1",
      blocks: {
        text1: { type: "text", value: "{{ c.queries.student.sr }}" },
      },
    },
    div1: {
      type: "div",
      className: "flex justify-between",
      blocks: {
        div2: {
          type: "div",
          className: "flex w-max flex-col",
          blocks: {
            image1: {
              type: "image",
              src: "{{ c.logo }}",
              alt: "Dezyne Ecole College",
              width: "100",
              height: "100",
              className: "h-[60px] w-[100px] object-cover",
            },
            p2: {
              type: "p",
              className: "mt-1 text-center text-xs font-semibold leading-3",
              blocks: {
                text2: { type: "text", value: "Today A Reader" },
              },
            },
            p3: {
              type: "p",
              className: "text-center text-xs font-semibold leading-3",
              blocks: {
                text3: { type: "text", value: "Tommorrow A Leader" },
              },
            },
          },
        },
        div3: {
          type: "div",
          className: "text-center",
          blocks: {
            h21: {
              type: "h2",
              className: "text-3xl font-semibold",
              blocks: {
                text4: { type: "text", value: "Dezyne École College" },
              },
            },
            p4: {
              type: "p",
              className: "text-sm leading-tight",
              blocks: {
                text5: {
                  type: "text",
                  value: "Unit of Suraj Narayan Uchh Takniki Shikshan Sansthan",
                },
              },
            },
            p5: {
              type: "p",
              className: "text-sm",
              blocks: {
                text6: {
                  type: "text",
                  value: "0145-2624679, 09829024839 | www.dezyneecole.com",
                },
              },
            },
            h31: {
              type: "h3",
              className:
                "mx-auto mt-2 w-max rounded-md bg-[#2ecc71] px-2.5 py-1 text-2xl font-medium",
              blocks: {
                text7: { type: "text", value: "Admission Form" },
              },
            },
          },
        },
        image2: {
          type: "image",
          src: "{{ c.queries.student.profile_image }}",
          alt: "student profile image",
          width: "150",
          height: "150",
          unoptimized: true,
          className:
            "'{{ c.queries.student.profile_image }}' ? 'block' : 'hidden'",
        },
        div4: {
          type: "div",
          className:
            "'{{ c.queries.student.profile_image }}' ? 'hidden' : 'h-[150px] w-[150px] border'",
        },
      },
    },
    p6: {
      type: "p",
      blocks: {
        text8: { type: "text", value: "For admission in " },
        span1: {
          type: "span",
          className: "font-semibold",
          blocks: {
            text9: {
              type: "text",
              value: "{{ c.queries.student.session.title }}",
            },
          },
        },
      },
    },
    table1: {
      type: "table",
      className:
        "w-full divide-secondary-300 dark:divide-secondary-700 min-w-full divide-y p-2",
      blocks: {
        tbody1: {
          type: "tbody",
          className: "dark:bg-secondary-700/40 bg-white",
          blocks: {
            tr1: {
              type: "tr",
              blocks: {
                td1: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: { text10: { type: "text", value: "Name" } },
                },
                td2: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text11: {
                      type: "text",
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
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text12: { type: "text", value: "Father's Name" },
                  },
                },
                td4: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text13: {
                      type: "text",
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
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text14: { type: "text", value: "Father's Profession" },
                  },
                },
                td6: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text15: {
                      type: "text",
                      value: "{{ c.queries.student.f_oc }}",
                    },
                  },
                },
              },
            },
            tr4: {
              type: "tr",
              blocks: {
                td7: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text16: { type: "text", value: "Mother's Name" },
                  },
                },
                td8: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text17: {
                      type: "text",
                      value: "{{ c.queries.student.mother_name }}",
                    },
                  },
                },
              },
            },
            tr5: {
              type: "tr",
              blocks: {
                td9: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text18: { type: "text", value: "Mother's Profession" },
                  },
                },
                td10: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text19: {
                      type: "text",
                      value: "{{ c.queries.student.m_oc }}",
                    },
                  },
                },
              },
            },
            tr6: {
              type: "tr",
              blocks: {
                td11: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text20: {
                      type: "text",
                      value: "Parent / Guardian Name",
                    },
                  },
                },
                td12: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text21: {
                      type: "text",
                      value: "{{ c.queries.student.cg }}",
                    },
                  },
                },
              },
            },
            tr7: {
              type: "tr",
              blocks: {
                td13: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: { text22: { type: "text", value: "Gender" } },
                },
                td14: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text23: {
                      type: "text",
                      value: "{{ c.queries.student.gen }}",
                    },
                  },
                },
              },
            },
            tr8: {
              type: "tr",
              blocks: {
                td15: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text24: { type: "text", value: "Date of Birth" },
                  },
                },
                td16: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text25: {
                      type: "text",
                      value: "{{ c.queries.student.dob }}",
                    },
                  },
                },
              },
            },
            tr9: {
              type: "tr",
              blocks: {
                td17: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text26: { type: "text", value: "Aadhar Card No" },
                  },
                },
                td18: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    pin1: {
                      type: "pin",
                      value: "{{ c.queries.student.aadhar }}",
                      length: "12",
                    },
                  },
                },
              },
            },
            tr10: {
              type: "tr",
              blocks: {
                td19: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text27: { type: "text", value: "Category" },
                  },
                },
                td20: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text28: {
                      type: "text",
                      value: "{{ c.queries.student.cat }}",
                    },
                  },
                },
              },
            },
            tr11: {
              type: "tr",
              blocks: {
                td21: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text29: { type: "text", value: "Religion" },
                  },
                },
                td22: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text30: {
                      type: "text",
                      value: "{{ c.queries.student.rel }}",
                    },
                  },
                },
              },
            },
            tr12: {
              type: "tr",
              blocks: {
                td23: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text31: { type: "text", value: "Permanent Address" },
                  },
                },
                td24: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text32: {
                      type: "text",
                      value: "{{ c.queries.student.per_add }}",
                    },
                  },
                },
              },
            },
            tr13: {
              type: "tr",
              blocks: {
                td25: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text33: {
                      type: "text",
                      value: "Correspondence Address",
                    },
                  },
                },
                td26: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text34: {
                      type: "text",
                      value: "{{ c.queries.student.pre_add }}",
                    },
                  },
                },
              },
            },
            tr14: {
              type: "tr",
              blocks: {
                td27: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text35: {
                      type: "text",
                      value: "Phone No. (Landline)",
                    },
                  },
                },
                td28: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text36: {
                      type: "text",
                      value: "{{ c.queries.student.land }}",
                    },
                  },
                },
              },
            },
            tr15: {
              type: "tr",
              blocks: {
                td29: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text37: { type: "text", value: "Student Mobile" },
                  },
                },
                td30: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text38: {
                      type: "text",
                      value: "{{ c.queries.student.s_mo }}",
                    },
                  },
                },
              },
            },
            tr16: {
              type: "tr",
              blocks: {
                td31: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text39: { type: "text", value: "Parents Mobile" },
                  },
                },
                td32: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text40: {
                      type: "text",
                      value: "{{ c.queries.student.f_mo }}",
                    },
                  },
                },
              },
            },
            tr17: {
              type: "tr",
              blocks: {
                td33: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: { text41: { type: "text", value: "Email" } },
                },
                td34: {
                  type: "td",
                  className:
                    "px-1.5 py-2 text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                  blocks: {
                    text42: {
                      type: "text",
                      value: "{{ c.queries.student.email }}",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    table2: {
      type: "table",
      className:
        "w-full divide-secondary-300 dark:divide-secondary-700 min-w-full divide-y p-2",
      blocks: {
        thead1: {
          type: "thead",
          blocks: {
            tr18: {
              type: "tr",
              blocks: {
                th1: {
                  type: "th",
                  colSpan: "8",
                  className:
                    "text-center text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold p-2",
                  blocks: {
                    text43: { type: "text", value: "Academic Record" },
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
              className: "border-y",
              blocks: {
                th2: {
                  type: "th",
                  className:
                    "border-l border-r text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold p-2",
                  blocks: {
                    text44: { type: "text", value: "Examination Level" },
                  },
                },
                th3: {
                  type: "th",
                  className:
                    "border-r text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold p-2 text-center",
                  blocks: { text45: { type: "text", value: "Board" } },
                },
                th4: {
                  type: "th",
                  className:
                    "border-r text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold p-2 text-center",
                  blocks: {
                    text46: { type: "text", value: "School Name" },
                  },
                },
                th5: {
                  type: "th",
                  className:
                    "border-r text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold p-2 text-center",
                  blocks: { text47: { type: "text", value: "%" } },
                },
                th6: {
                  type: "th",
                  className:
                    "border-r text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold p-2 text-center",
                  blocks: { text48: { type: "text", value: "Subject" } },
                },
                th7: {
                  type: "th",
                  className:
                    "border-r text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold p-2 text-center",
                  blocks: { text49: { type: "text", value: "Place" } },
                },
                th8: {
                  type: "th",
                  className:
                    "border-r text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold p-2 text-center",
                  blocks: { text50: { type: "text", value: "Year" } },
                },
                th9: {
                  type: "th",
                  className:
                    "border-r text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold p-2 text-center",
                  blocks: {
                    text51: {
                      type: "text",
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
          className: "dark:bg-secondary-700/40 bg-white",
          blocks: {
            tr20: {
              type: "tr",
              className: "border-b border-l",
              blocks: {
                td35: {
                  type: "td",
                  className: "border-r dark:bg-secondary-700/40 bg-white p-2",
                  blocks: { text52: { type: "text", value: "X Class" } },
                },
                td36: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text53: {
                      type: "text",
                      value: "{{ c.queries.student.tenth.board }}",
                    },
                  },
                },
                td37: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text54: {
                      type: "text",
                      value: "{{ c.queries.student.tenth.school }}",
                    },
                  },
                },
                td38: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text55: {
                      type: "text",
                      value: "{{ c.queries.student.tenth.per }}",
                    },
                  },
                },
                td39: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                },
                td40: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text56: {
                      type: "text",
                      value: "{{ c.queries.student.tenth.place }}",
                    },
                  },
                },
                td41: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text57: {
                      type: "text",
                      value: "{{ c.queries.student.tenth.year }}",
                    },
                  },
                },
                td42: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text58: {
                      type: "text",
                      value: "{{ c.queries.student.tenth.reg }}",
                    },
                  },
                },
              },
            },
            tr21: {
              type: "tr",
              className: "border-b border-l",
              blocks: {
                td43: {
                  type: "td",
                  className: "border-r dark:bg-secondary-700/40 bg-white p-2",
                  blocks: {
                    text59: { type: "text", value: "XII Class" },
                  },
                },
                td44: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text60: {
                      type: "text",
                      value: "{{ c.queries.student.twelfth.board }}",
                    },
                  },
                },
                td45: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text61: {
                      type: "text",
                      value: "{{ c.queries.student.twelfth.school }}",
                    },
                  },
                },
                td46: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text62: {
                      type: "text",
                      value: "{{ c.queries.student.twelfth.per }}",
                    },
                  },
                },
                td47: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text63: {
                      type: "text",
                      value: "{{ c.queries.student.twelfth.sub }}",
                    },
                  },
                },
                td48: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text64: {
                      type: "text",
                      value: "{{ c.queries.student.twelfth.place }}",
                    },
                  },
                },
                td49: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text65: {
                      type: "text",
                      value: "{{ c.queries.student.twelfth.year }}",
                    },
                  },
                },
                td50: {
                  type: "td",
                  className:
                    "border-r dark:bg-secondary-700/40 bg-white p-2 text-center",
                  blocks: {
                    text66: {
                      type: "text",
                      value: "{{ c.queries.student.twelfth.reg }}",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    div5: {
      type: "div",
      className: "mt-9 flex items-center justify-between",
      blocks: {
        div6: {
          type: "div",
          blocks: {
            div7: { type: "div", className: "h-[1px] w-full bg-black" },
            p7: {
              type: "p",
              className: "text-sm",
              blocks: {
                text67: { type: "text", value: "Student's Signature" },
              },
            },
          },
        },
        div8: {
          type: "div",
          blocks: {
            div9: { type: "div", className: "h-[1px] w-full bg-black" },
            p8: {
              type: "p",
              className: "text-sm",
              blocks: {
                text68: { type: "text", value: "Parent's Signature" },
              },
            },
          },
        },
      },
    },
    div10: { type: "div", className: "break-after-page" },
    h41: {
      type: "h4",
      className:
        "my-1 text-center text-xl font-semibold uppercase text-[#1e4888]",
      blocks: { text69: { type: "text", value: "Declaration" } },
    },
    p9: {
      type: "p",
      className: "mb-0.5 font-bold",
      blocks: {
        text70: {
          type: "text",
          value: "List of Enclose to be Submitted by Students -",
        },
      },
    },
    ol1: {
      type: "ol",
      className: "list-inside list-decimal",
      blocks: {
        li1: {
          type: "li",
          className: "dark:text-secondary-100",
          blocks: {
            text71: { type: "text", value: "Photocopy of 10" },
            sup1: {
              type: "sup",
              blocks: { text72: { type: "text", value: "th" } },
            },
            text73: { type: "text", value: "Marksheet" },
          },
        },
        li2: {
          type: "li",
          className: "dark:text-secondary-100",
          blocks: {
            text74: { type: "text", value: "Photocopy of 12" },
            sup2: {
              type: "sup",
              blocks: { text75: { type: "text", value: "th" } },
            },
            text76: { type: "text", value: "Marksheet" },
          },
        },
        li3: {
          type: "li",
          className: "dark:text-secondary-100",
          blocks: {
            text77: { type: "text", value: "6 Passport Size Photos" },
          },
        },
        li4: {
          type: "li",
          className: "dark:text-secondary-100",
          blocks: {
            text78: { type: "text", value: "Aadhar Card Copy" },
          },
        },
      },
    },
    p10: {
      type: "p",
      className: "mb-0.5 mt-12 font-bold",
      blocks: {
        text79: { type: "text", value: "Needs to be Signed by Applicant" },
      },
    },
    ol2: {
      type: "ol",
      className: "list-inside list-decimal",
      blocks: {
        li5: {
          type: "li",
          className: "dark:text-secondary-100",
          blocks: {
            text80: {
              type: "text",
              value:
                "I hereby declare that I have Successfully completed my 10+2 and I have Submitted my 10+2 / Degree/ Diploma Certificate as evidence or as soon as my Result are Declared in this case. I Understand that if I Fail to Submit this proof within 30 Days of my Session Start at Dezyne École College my Admission Stands Cancelled.",
            },
          },
        },
        li6: {
          type: "li",
          className: "dark:text-secondary-100",
          blocks: {
            span2: {
              type: "span",
              blocks: {
                text81: {
                  type: "text",
                  value:
                    "I understand that before starting professional practice (Training)",
                },
              },
            },
            ul1: {
              type: "ul",
              className: "list-inside list-disc",
              blocks: {
                li7: {
                  type: "li",
                  className: "dark:text-secondary-100",
                  blocks: {
                    text82: {
                      type: "text",
                      value:
                        "Must have an Aggregate of 60% at the end of each semester / Year of Degree/ Master Program Complete till them",
                    },
                  },
                },
                li8: {
                  type: "li",
                  className: "dark:text-secondary-100",
                  blocks: {
                    text83: {
                      type: "text",
                      value: "Should be less than 25 Years of age",
                    },
                  },
                },
                li9: {
                  type: "li",
                  className: "dark:text-secondary-100",
                  blocks: {
                    text84: {
                      type: "text",
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
          className: "dark:text-secondary-100",
          blocks: {
            text85: {
              type: "text",
              value:
                "I understand that my Professional Practice may be anywhere in India or Abroad and that my Travel, Boarding and lodging expenses shall be born entirely by me. I understand and agree that besides that rules mentioned as part of 'Student Obligations' given to me, the above Rules are also applicable to me. I agree to Abide by the above Rules.",
            },
          },
        },
        li11: {
          type: "li",
          className: "dark:text-secondary-100",
          blocks: {
            text86: {
              type: "text",
              value: "Students Obligations Rules given to students.",
            },
          },
        },
      },
    },
    div11: {
      type: "div",
      className: "mt-12",
      blocks: {
        div12: {
          type: "div",
          className: "h-[1px] w-full max-w-[150px] bg-black",
        },
        p11: {
          type: "p",
          className: "text-sm",
          blocks: {
            text87: { type: "text", value: "Student's Signature" },
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
      }
    )
    .then((res) => res.data);

  return {
    student: data,
  };
};
