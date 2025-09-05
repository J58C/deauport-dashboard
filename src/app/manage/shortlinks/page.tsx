import ManageHeaderClient from "../header-client";
import Section from "./section-client";

export const metadata = { title: "Manage — Shortlinks" };

export default async function Page() {
  return (
    <>
      <ManageHeaderClient current="shortlinks" />
      <div className="mx-auto max-w-6xl px-4 pt-3">
        <Section />
      </div>
    </>
  );
}