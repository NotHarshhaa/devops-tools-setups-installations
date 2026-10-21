import { AppSidebar } from "@/components/layout/app-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 min-w-0 md:px-8">
      <div className="mx-auto flex max-w-screen-2xl">
        <AppSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
