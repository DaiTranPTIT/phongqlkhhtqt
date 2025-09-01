import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  // Sử dụng giá trị cố định để tránh hydration mismatch
  const currentYear = 2025;

  const socialLinks = [
    { icon: Mail, href: "#", label: "Email" },
    { icon: Github, href: "https://github.com/technews", label: "Github" },
    { icon: Twitter, href: "https://twitter.com/technews", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/technews",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/40">
      <div className="container mx-auto px-4">
        {/* Top Wave SVG */}
        <div className="relative h-8 overflow-hidden -mt-8">
          <svg
            className="absolute bottom-0 w-full h-16 text-slate-900"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Brand Section */}
            <div className="mb-8 md:mb-0 text-center md:text-left md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                  TechNews
                </span>
              </h3>
              <p className="text-slate-400 max-w-md">
                Cập nhật tin tức công nghệ mới nhất từ các nguồn uy tín nhất
              </p>
            </div>

            {/* Contact Links */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h4 className="text-white font-semibold mb-4 text-center">
                Kết nối với chúng tôi
              </h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-center p-3 rounded-full bg-slate-800 hover:bg-orange-500 text-white transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800/50 py-6">
          <div className="flex justify-center items-center">
            <p className="text-slate-400 text-sm text-center">
              © {currentYear} TechNews. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
