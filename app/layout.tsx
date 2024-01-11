import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import AcmeLogo from "@/app/ui/acme-logo";
import Link from "next/link";
import {Providers} from "@/app/lib/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
              <Link href="/">
                <AcmeLogo />
              </Link>
            </div>
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
              <div className="container mx-auto my-8">
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
    </Providers>
  );
}
