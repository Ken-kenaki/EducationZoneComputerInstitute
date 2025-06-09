// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { createClient } from "@/utils/supabase/client";

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [userEmail, setUserEmail] = useState("");
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (!session) {
//         router.push("/admin/login");
//         return;
//       }

//       setUserEmail(session.user.email || "");

//       // Fetch admin status
//       const { data: profile } = await supabase
//         .from("profiles")
//         .select("is_admin")
//         .eq("id", session.user.id)
//         .single();

//       setIsAdmin(profile?.is_admin || false);
//       setLoading(false);
//     };

//     fetchUserData();

//     // Set up auth state listener
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((event, session) => {
//       if (event === "SIGNED_OUT") {
//         router.push("/admin/login");
//       }
//     });

//     return () => subscription.unsubscribe();
//   }, [router]);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push("/admin/login");
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-blue-800 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold">Education Zone Admin</h1>
//             <p className="text-sm opacity-80">
//               {userEmail} {isAdmin ? "(Admin)" : ""}
//             </p>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Gallery Card */}
//           <Link href="/admin/gallery" className="block">
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full border-t-4 border-blue-500">
//               <div className="text-blue-600 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-12 w-12"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-bold mb-2 text-gray-800">
//                 Gallery Management
//               </h2>
//               <p className="text-gray-600">
//                 Upload, edit, and delete images in the gallery
//               </p>
//             </div>
//           </Link>

//           {/* Courses Card */}
//           <Link href="/admin/courses" className="block">
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full border-t-4 border-green-500">
//               <div className="text-green-600 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-12 w-12"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//                   />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-bold mb-2 text-gray-800">
//                 Course Management
//               </h2>
//               <p className="text-gray-600">Add, edit, and delete courses</p>
//             </div>
//           </Link>

//           {/* Forms Card */}
//           <Link href="/admin/forms" className="block">
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full border-t-4 border-purple-500">
//               <div className="text-purple-600 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-12 w-12"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                   />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-bold mb-2 text-gray-800">
//                 Form Submissions
//               </h2>
//               <p className="text-gray-600">View and manage submitted forms</p>
//             </div>
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// }
