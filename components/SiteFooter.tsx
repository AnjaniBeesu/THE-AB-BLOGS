import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="global-footer">
      <nav aria-label="Legal links">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/cookies">Manage cookies</Link>
      </nav>
    </footer>
  );
}
