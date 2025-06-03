import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";
import LogoutButton from "@/Components/LogoutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: userData } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", session?.user.id)
    .single();

  if (!session || !userData?.is_admin) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Education Zone Admin</h1>
          <LogoutButton />
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
