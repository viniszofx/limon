import { Card } from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <div>
      <Card className="w-full max-w-sm mx-auto mt-10 p-4">
        <h2 className="text-2xl font-bold text-center">Error</h2>
        <p className="text-center mt-4">Something went wrong.</p>
        <p className="text-center mt-2">Please try again later.</p>
        <p className="text-center mt-2">Bruno is gay</p>
      </Card>
    </div>
  );
}
