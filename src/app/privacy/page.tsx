import { Shell } from "@/components/shell";
import { H1, Subtle, Card } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy — Deauport" };

export default async function PrivacyPage() {
  return (
    <Shell>
      <H1>Privacy</H1>
      <Subtle className="mt-1">
        Ringkasan kebijakan privasi untuk penggunaan dashboard & services.
      </Subtle>

      <div className="mt-6 space-y-4">
        <Card>
          <div className="text-sm font-medium">Data yang Diproses</div>
          <ul className="mt-2 list-inside list-disc text-sm text-subtle">
            <li>
              <span className="font-medium">Uptime checks</span>: menyimpan nama,
              URL target, interval, status terakhir, dan metrik agregat (mis. rata-rata
              latency). Log status disimpan terbatas untuk menampilkan grafik.
            </li>
            <li>
              <span className="font-medium">Shortlinks</span>: menyimpan slug, target
              URL, status (enabled), serta hit counter non-personal.
            </li>
            <li>
              <span className="font-medium">Akun</span>: hanya kredensial minimal
              untuk login single-user (tanpa multi-profil).
            </li>
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-medium">Cookies & Sessions</div>
          <p className="mt-2 text-sm text-subtle">
            Session cookie dipakai untuk autentikasi. Masa berlaku default 7 hari,
            dan 30 hari jika “Remember me” diaktifkan. Tidak ada tracking pihak ketiga.
          </p>
        </Card>

        <Card>
          <div className="text-sm font-medium">Retensi & Kontrol</div>
          <ul className="mt-2 list-inside list-disc text-sm text-subtle">
            <li>Log uptime disimpan secukupnya untuk grafik ringkas dan dapat dipangkas berkala.</li>
            <li>Item dapat dihapus sewaktu-waktu melalui halaman Manage.</li>
            <li>Konfigurasi & environment tetap berada di infrastruktur milik pengguna.</li>
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-medium">Keamanan</div>
          <p className="mt-2 text-sm text-subtle">
            Endpoint dilindungi API key & rate limiting. Password tidak pernah disimpan
            dalam bentuk plaintext. Pastikan menyebarkan aplikasi ini melalui koneksi HTTPS.
          </p>
        </Card>

        <Card>
          <div className="text-sm font-medium">Perubahan</div>
          <p className="mt-2 text-sm text-subtle">
            Kebijakan ini dapat diperbarui mengikuti perubahan fitur. Versi terbaru akan
            tersedia di halaman ini.
          </p>
        </Card>
      </div>
    </Shell>
  );
}