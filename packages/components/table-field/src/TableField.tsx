"use client";
import {
  DataTable,
  PageJumper,
  PageSizeSelect,
  Pagination,
  PaginationButtons,
} from "@rafty/corp";
import { Text } from "@rafty/ui";
import type { tableSchema } from "@rhinobase/shared";
import React, { useState } from "react";
import type z from "zod";
import { ActionSelect } from "./ActionSelect";

export type TableProps = z.infer<typeof tableSchema>;

export function TableField({
  actions,
  columns,
  data,
  enablePagination,
  enableSelection,
}: TableProps) {
  const [rowsSelected, setRowsSelected] = useState<Record<string, boolean>>({});
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 10,
  });

  const count = Object.values(data?.rows)?.length ?? 0;
  const offset = (pagination.current - 1) * pagination.limit;
  const pages = Math.ceil(count / pagination.limit);
  const selectedRowsLength = Object.keys(rowsSelected).length;

  const displayedData = enablePagination
    ? Object.values(data?.rows)?.slice(offset, offset + pagination.limit) ?? []
    : Object.values(data?.rows) ?? [];

  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-auto scroll-smooth flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 p-3 md:p-4 lg:p-5 xl:p-6">
      {selectedRowsLength > 0 && enableSelection === true && (
        <div className="w-full min-h-[38px] flex items-center">
          <Text className="text-sm">
            {selectedRowsLength} {selectedRowsLength > 1 ? "rows" : "row"}{" "}
            selected
          </Text>
          <div className="flex-1" />
          {/* <ActionSelect
            propertyName={actionPropertyName}
            selectedRows={selectedRows}
            onActionComplete={() => setRowsSelected({})}
            actionApiUrl={actionApiUrl ?? ""}
            dataQueryKey={dataQueryKey ?? []}
          /> */}
        </div>
      )}
      <DataTable
        columns={columns}
        data={displayedData}
        onRowsSelectedChange={setRowsSelected}
        rowsSelected={rowsSelected}
        enableRowSelection={enableSelection}
        className="h-max grid overflow-hidden"
      />
      {enablePagination && (
        <Pagination
          pages={pages}
          pageLimit={pagination.limit}
          currentPage={pagination.current}
          onChange={(page, pageLimit) =>
            setPagination((prev) => {
              if (prev.limit !== pageLimit)
                return { current: 1, limit: pageLimit };
              return {
                current: page,
                limit: pageLimit,
              };
            })
          }
          className="border rounded-lg px-4 py-3 border-secondary-300 dark:border-secondary-700"
        >
          <p className="text-secondary-700 dark:text-secondary-300">
            {count > 0 ? pagination.current * pagination.limit + 1 : 0}
            &nbsp;-&nbsp;
            {pagination.limit + pagination.current * pagination.limit > count
              ? count
              : pagination.limit + pagination.current * pagination.limit}
            &nbsp;of&nbsp;{count}
          </p>
          <div className="flex-1" />
          <div className="flex items-center gap-1">
            <div className="text-secondary-700 dark:text-secondary-300 hidden md:block">
              Rows per page :
            </div>
            <PageSizeSelect className="dark:bg-secondary-950" />
          </div>
          <div className="md:flex items-center gap-1 hidden">
            <p className="text-secondary-700 dark:text-secondary-300">Page :</p>
            <PageJumper className="w-20" />
          </div>
          <PaginationButtons />
        </Pagination>
      )}
    </div>
  );
}
