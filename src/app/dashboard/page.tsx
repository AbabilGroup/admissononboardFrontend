import { Suspense } from "react";
import RequireAuth from "@/components/common/RequireAuth";
import DashboardRouter from "@/components/dashboard/common/DashboardRouter";

export default function Page() {
  return (
    <RequireAuth>
      <Suspense fallback={null}>
        <DashboardRouter />
      </Suspense>
    </RequireAuth>
  );
}
