"use client";
import { JSONExplorer } from "@rafty/corp";
import { Kbd } from "@rafty/ui";
import { type DuckField, useDuckForm } from "duck-form";
import { useId } from "react";

export function DefaultField(props: DuckField<Record<string, unknown>>) {
  const { resolverKey } = useDuckForm();

  const autoId = useId();
  const componentId = String(props[resolverKey]) ?? autoId;

  const fieldProps = { ...props, [resolverKey]: componentId };

  return (
    <div className="space-y-1">
      <p>
        Field type <Kbd>{props.type}</Kbd> is not available!
      </p>
      <JSONExplorer data={{ field: fieldProps }} />
    </div>
  );
}
