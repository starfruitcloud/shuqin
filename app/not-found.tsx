/*
 * :file description:
 * :name: /shuqin/app/not-found.tsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-28 21:12:23
 * :last editor: 张德志
 * :date last edited: 2024-09-28 21:12:59
 */
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
