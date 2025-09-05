import ManageHeaderClient from "../header-client";
import Section from "./section-client";

export const metadata = { title: "Manage — Uptime" };

export default async function Page() {
  return (
    <>
      <ManageHeaderClient current="uptime" />
      <div className="mx-auto max-w-6xl px-4 pt-3">
        <Section />
      </div>
    </>
  );
}