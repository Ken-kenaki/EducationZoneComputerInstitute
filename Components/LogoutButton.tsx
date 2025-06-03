"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
    >
      Logout
    </button>
  );
}
