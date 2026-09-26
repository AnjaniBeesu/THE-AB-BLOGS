import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="global-header">
      <div className="global-header-left">
        <Link href="/" className="global-logo" aria-label="The AB Blogs home">
          <img src="/icon.svg" alt="AB" />
        </Link>
        <Link href="/" className="global-home">home</Link>
      </div>
      <p>random talks by <strong>Anjani Beesu</strong></p>
    </header>
  );
}
