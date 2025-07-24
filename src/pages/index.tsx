import Link from "next/link";
import { gilroy } from "@/styles/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/routing">STATIC</Link>
        </li>
        <li>
          <Link href="/routing/dynamic/1234/">Dynamic</Link>
        </li>
        <li>
          <Link href="/routing/nested/adfg/routing/">NESTED</Link>
        </li>
        <li>
          <Link href="/routing/catch-all-segments/1/2/3/4/5/a/b/c/d/">
            CATCH ALL SEGMENTS
          </Link>
        </li>
      </ul>
    </main>
  );
}
