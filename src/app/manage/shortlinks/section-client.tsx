"use client";
import { Card } from "@/components/ui";
import { ShortlinksClient } from "./ui-client";

export default function Section() {
  return (
    <Card className="p-0">
      <ShortlinksClient />
    </Card>
  );
}