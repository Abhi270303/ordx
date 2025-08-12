import { Suspense } from "react";
import { CreateCollectionPage } from "@/components/CreateCollectionPage";

export default function CreateCollectionRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-muted-foreground">Loading collection form...</p>
          </div>
        </div>
      }>
        <CreateCollectionPage />
      </Suspense>
    </div>
  );
}
