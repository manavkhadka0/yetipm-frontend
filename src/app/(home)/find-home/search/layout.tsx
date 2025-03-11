import MainLayout from "@/components/layout/main";
import { Suspense } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </MainLayout>
  );
}
