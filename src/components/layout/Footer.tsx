import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  // Sử dụng giá trị cố định để tránh hydration mismatch
  const currentYear = 2025;

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
    categories: [
      { name: "Artificial Intelligence", href: "#" },
      { name: "Blockchain", href: "#" },
      { name: "Mobile Technology", href: "#" },
      { name: "Web Development", href: "#" },
    ],
    resources: [
      { name: "Newsletter", href: "#" },
      { name: "RSS Feed", href: "#" },
      { name: "API", href: "#" },
      { name: "Developer Tools", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">TechNews</h3>
            <p className="text-slate-400 mb-6">
              Your trusted source for the latest technology news, insights, and
              analysis. Stay informed about the innovations shaping our future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} TechNews. All rights reserved.
            </p>
            <div className="flex items-center text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" />
              <span>IEC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
