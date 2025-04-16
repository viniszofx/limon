"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function ButtonDashboard() {
  return (
    <Link href="/dashboard">
      <Button variant={"destructive"}>Go to Dashboard</Button>
    </Link>
  );
}
