import Link from "next/link";
import { Shell } from "@/components/shell";
import { PageHeader } from "@/components/page-header";

function ManageTabs({ current }: { current: "uptime" | "shortlinks" }) {
  const base = "inline-flex items-center rounded-md border border-[var(--border)] px-3 py-1.5 text-sm";
  const active = "bg-[var(--surface-2)] text-[var(--text)]";
  const idle = "text-subtle hover:bg-[color-mix(in_srgb,var(--surface-2)_80%,white_10%)]";

  return (
    <div className="flex items-center gap-2">
      <Link href="/manage/uptime" className={`${base} ${current === "uptime" ? active : idle}`}>Uptime</Link>
      <Link href="/manage/shortlinks" className={`${base} ${current === "shortlinks" ? active : idle}`}>Shortlinks</Link>
    </div>
  );
}

export default function ManageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Shell authed>
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </Shell>
  );
}

export function ManageHeader({
  current,
  onAddHref,
  subtitle,
}: {
  current: "uptime" | "shortlinks";
  onAddHref: string;
  subtitle: string;
}) {
  return (
    <PageHeader
      title="Manage"
      subtitle={subtitle}
      sticky
      actions={
        <div className="flex gap-2">
          {current === "uptime" ? (
            <>
              <Link href="/manage/uptime?new=1#add-uptime" className="btn">+ Uptime</Link>
              <Link href="/manage/shortlinks?new=1#add-short" className="btn btn-ghost">+ Shortlink</Link>
            </>
          ) : (
            <>
              <Link href="/manage/uptime?new=1#add-uptime" className="btn btn-ghost">+ Uptime</Link>
              <Link href="/manage/shortlinks?new=1#add-short" className="btn">+ Shortlink</Link>
            </>
          )}
        </div>
      }
      className="border-b"
    >
    </PageHeader>
  );
}