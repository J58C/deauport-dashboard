"use client";
import { Card } from "@/components/ui";
import { UptimeClient } from "./ui-client";

export default function Section() {
  return (
    <Card className="p-0">
      <UptimeClient />
    </Card>
  );
}