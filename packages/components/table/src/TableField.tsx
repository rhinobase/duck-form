import { Table, TableBody, TableHeader, Td, Th, Tr } from "@rafty/ui";
import { evalProp, type tableSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type TableProps = z.infer<typeof tableSchema>;

export function TableComponent(props: TableProps) {
  const { columns, data, ...fieldProps } = Object.entries(props).reduce<
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    Record<string, any>
  >((prev, [key, val]) => {
    if (
      val &&
      typeof val === "object" &&
      "type" in val &&
      (val.type === "literal" || val.type === "script")
    ) {
      prev[key] = evalProp(val);
    }

    return prev;
  }, {});

  return (
    <Table {...fieldProps}>
      <TableHeader>
        <Tr>
          {(columns as string[]).map((value, index) => (
            <Th key={`${index}-${value}`}>{value}</Th>
          ))}
        </Tr>
      </TableHeader>
      <TableBody>
        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
        {(data as Record<string, any>[]).map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Tr key={index}>
            {Object.values(item).map((value, index) => (
              <Td key={`${index}-${value}`}>{value}</Td>
            ))}
          </Tr>
        ))}
      </TableBody>
    </Table>
  );
}
