import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Logout from "@/components/logout";

export default async function Page() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <div>
      <h2>Content</h2>
      <p>Hello {data.user.email}</p>
      <Logout />
    </div>
  );
}
