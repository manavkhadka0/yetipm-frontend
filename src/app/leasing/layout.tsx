import MainLayout from "@/components/layout/main";
import ContactView from "@/sections/contact-us/view/contact-view";

export default function LeasingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      {children}
      <ContactView />
    </MainLayout>
  );
}
