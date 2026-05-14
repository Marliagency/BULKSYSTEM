import Container from "@/components/ui/Container";

const links = {
  Product: ["Features", "System", "Results", "Pricing"],
  Company: ["About", "Contact", "Blog"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[#050505] py-16">
      <Container size="xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#10B981] flex items-center justify-center">
                <span className="text-black font-bold text-xs">B</span>
              </div>
              <span className="font-semibold text-[#F5F5F5] tracking-[-0.02em] text-sm">
                BULK<span className="text-[#10B981]">SYSTEM</span>
              </span>
            </div>
            <p className="text-sm text-[#52525B] leading-relaxed max-w-xs">
              The operating system for your body. Nutrition, training, recovery and analytics — unified.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-xs font-mono text-[#3F3F46] tracking-[0.08em] uppercase mb-4">
                {category}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.04)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#3F3F46]">© 2025 BulkSystem. All rights reserved.</p>
          <p className="text-xs text-[#3F3F46] font-mono">Consistency compounds.</p>
        </div>
      </Container>
    </footer>
  );
}
