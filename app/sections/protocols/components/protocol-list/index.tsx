import React from "react";
import type { ProtocolListProps } from "./types";
import { ProtocolList as ProtocolListSC } from "./styles";
import { ProtocolItem } from "../protocol-item";

export function ProtocolList({ data }: ProtocolListProps) {
  return (
    <ProtocolListSC>
      {data.map(({ title, description, color }, index) => (
        <ProtocolItem
          tag={index}
          title={title}
          description={description}
          color={color}
        />
      ))}
    </ProtocolListSC>
  );
}
