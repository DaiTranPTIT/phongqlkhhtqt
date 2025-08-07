"use client";

import { Mail, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // In a real app, you would send this to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="mb-6">
            <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-slate-300 text-lg">
              Get the latest tech news, insights, and analysis delivered directly to your inbox. 
              Join over 100,000+ tech enthusiasts who trust our newsletter.
            </p>
          </div>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 text-green-400 py-4">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Successfully subscribed! Check your email.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-slate-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-slate-600">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">100K+</div>
                <div className="text-sm text-slate-400">Subscribers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Daily</div>
                <div className="text-sm text-slate-400">Updates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Ad-Free</div>
                <div className="text-sm text-slate-400">Content</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
