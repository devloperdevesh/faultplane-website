import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <Image src="/logo/logo.png" alt="FaultPlane" width={40} height={40} priority />
      <span>FaultPlane</span>
    </Link>
  );
}
