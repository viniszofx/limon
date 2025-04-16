"use client";

import React from "react";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default function Logout() {
  const supabase = createClient();

  return (
    <Button
      className="cursor-pointer"
      variant="destructive"
      onClick={async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error("Error signing out:", error.message);
        } else {
          redirect("/login");
        }
      }}
    >
      Sign out
    </Button>
  );
}
