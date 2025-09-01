"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/AuthContext";

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="bg-slate-900 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-white mb-6">My Profile</h1>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="w-full sm:w-1/3 text-slate-400 mb-1 sm:mb-0">Name</div>
                <div className="w-full sm:w-2/3 text-white font-medium">{user.name}</div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="w-full sm:w-1/3 text-slate-400 mb-1 sm:mb-0">Email</div>
                <div className="w-full sm:w-2/3 text-white font-medium">{user.email}</div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="w-full sm:w-1/3 text-slate-400 mb-1 sm:mb-0">Role</div>
                <div className="w-full sm:w-2/3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-500/10 text-orange-500">
                    {user.role}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="w-full sm:w-1/3 text-slate-400 mb-1 sm:mb-0">Member since</div>
                <div className="w-full sm:w-2/3 text-white font-medium">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700">
              <h2 className="text-xl font-bold text-white mb-4">Account Settings</h2>
              <p className="text-slate-400 italic">
                Account settings feature will be available soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
