import Header from "./header";
import Footer from "./footer";
import TawkChat from "@/components/twak-to-messenger";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <TawkChat />
      {children}
      <Footer />
    </>
  );
}
