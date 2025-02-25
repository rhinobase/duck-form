import { Table, TableBody, TableHeader, Td, Th, Tr } from "@rafty/ui/table";
import { type tableSchema, useEvaluate } from "@rhinobase/shared";
import { useField } from "duck-form";
import React from "react";
import type z from "zod";

export type TableProps = z.infer<typeof tableSchema>;

export function TableComponent() {
  const props = useField<TableProps>();
  const { columns, data, ...fieldProps } = useEvaluate(props);

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
