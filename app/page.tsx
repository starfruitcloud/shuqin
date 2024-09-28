/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * :file description:  首页
 * :name: /shuqin/app/page.tsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-28 20:34:17
 * :last editor: 张德志
 * :date last edited: 2024-09-29 05:25:20
 */

import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home() {
  // const baseUrl = "https://cnodejs.org/api/v1";
  // const rsp = await fetch(`${baseUrl}/topics`).then((res) => res.json());
  return (
    <div>
      {/* {rsp.data.map((item:any) => (
        <h3 key={item?._id}>{item?.title}</h3>
      ))} */}
      <li><Link href="/about">about</Link></li>
      <li><Link href="/next">next</Link></li>
    </div>
  );
}
