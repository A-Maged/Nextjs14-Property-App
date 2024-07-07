import { MainLayout } from "@/components/layouts/main-layout";

export default function FullLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout fullWidth>{children}</MainLayout>;
}
