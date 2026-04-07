import Link from 'next/link'
import { Mountain } from 'lucide-react'

const footerLinks = {
  'Túrák': [
    { href: '/turak?kategoria=kerékpár', label: 'Kerékpáros túrák' },
    { href: '/turak?kategoria=gyalogtúra', label: 'Gyalogtúrák' },
    { href: '/turak?kategoria=futás', label: 'Futótúrák' },
    { href: '/turak?kategoria=felfedezés', label: 'Felfedező túrák' },
  ],
  'Információk': [
    { href: '/hogyan-mukodik', label: 'Hogyan működik?' },
    { href: '/rolunk', label: 'Rólunk' },
    { href: '/kapcsolat', label: 'Kapcsolat' },
  ],
  'Jogi': [
    { href: '/adatvedelmi-iranyelvek', label: 'Adatvédelmi irányelvek' },
    { href: '/cookie-iranyelvek', label: 'Cookie irányelvek' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Mountain className="w-4 h-4 text-primary-foreground" />
              </span>
              <span className="font-serif font-bold text-lg leading-tight">
                Sports Tours <span className="text-accent">Hungary</span>
              </span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Fedezze fel Magyarország természeti kincseit aktív túraprogramjainkkal. Szakértő
              vezetők, egyedi útvonalak, felejthetetlen élmények.
            </p>
            <div className="mt-6 text-sm text-background/50 leading-relaxed">
              <p className="font-medium text-background/70 mb-1">K.C. NTOMATA LIMITED</p>
              <p>Stylianou Lena, 24 Christiana Court,</p>
              <p>Flat/Office 202, Strovolos,</p>
              <p>2019 Nicosia, Cyprus</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-serif font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
                {group}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Sports Tours Hungary Kft. Minden jog fenntartva.
          </p>
          <p className="text-xs text-background/40">sportstourshungary.com</p>
        </div>
      </div>
    </footer>
  )
}
