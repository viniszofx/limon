import { Card, CardTitle } from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <Card className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <CardTitle className="w-full max-w-sm">Verify your email</CardTitle>
      <p className="text-sm text-muted-foreground">
        We sent you a verification email. Please check your inbox and click the
        link to verify your email address.
      </p>
      <p className="text-sm text-muted-foreground">
        If you don't see the email, please check your spam folder or click the
        button below to resend the verification email.
      </p>
    </Card>
  );
}
