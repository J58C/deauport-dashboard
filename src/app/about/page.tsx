import { Shell } from "@/components/shell";
import { H1, Subtle, Card } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About — Deauport" };

export default async function AboutPage() {
  return (
    <Shell>
      <H1>About</H1>
      <Subtle className="mt-1">Apa itu Deauport dan kenapa dibuat.</Subtle>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <div className="text-sm font-medium">Visi</div>
          <p className="mt-2 text-sm text-subtle">
            Deauport adalah personal dashboard untuk mengelola uptime monitoring
            dan shortlinks secara sederhana, cepat, dan privat. Fokusnya: ringkas,
            *no-nonsense*, dan nyaman dipakai harian.
          </p>
        </Card>

        <Card>
          <div className="text-sm font-medium">Fitur Saat Ini</div>
          <ul className="mt-2 list-inside list-disc text-sm text-subtle">
            <li>Uptime checks dengan interval fleksibel</li>
            <li>Grafik mini (sparkline) & latest status</li>
            <li>Shortlinks dengan hit counter</li>
            <li>Login sederhana (single account)</li>
            <li>Rate limit & API key di server</li>
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-medium">Teknologi</div>
          <ul className="mt-2 list-inside list-disc text-sm text-subtle">
            <li>Next.js App Router + Tailwind v4 (no root config)</li>
            <li>Fastify + Prisma di services</li>
            <li>PostgreSQL/SQLite (opsional sesuai env)</li>
            <li>Edge-friendly & cache “no-store” untuk data kritis</li>
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-medium">Roadmap Ringkas</div>
          <ul className="mt-2 list-inside list-disc text-sm text-subtle">
            <li>Grafik uptime yang lebih kaya (range & compare)</li>
            <li>Export data (CSV/JSON)</li>
            <li>Notifikasi (email/webhook) opsional</li>
            <li>Per-role access (opsional, tetap minimalis)</li>
          </ul>
        </Card>
      </div>

      <Card className="mt-4">
        <div className="text-sm font-medium">Kontak</div>
        <p className="mt-2 text-sm text-subtle">
          Punya ide atau menemukan bug? Boleh kirim masukan via halaman Manage → Shortlinks
          (buat tautan “feedback”) atau langsung hubungi melalui profil yang kamu biasa pakai.
        </p>
      </Card>
    </Shell>
  );
}