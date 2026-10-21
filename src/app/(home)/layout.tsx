import { AppSidebar } from "@/components/layout/app-sidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* The docs navigation is only useful on mobile here — the desktop
          sidebar (and the space it reserves) is hidden on the landing page. */}
      <AppSidebar className="data-[slot=sidebar-container]:hidden [&_[data-slot=sidebar-gap]]:hidden" />
      {children}
    </div>
  );
}
