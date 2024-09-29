/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * :file description:  首页
 * :name: /shuqin/app/page.tsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-28 20:34:17
 * :last editor: 张德志
 * :date last edited: 2024-09-29 19:53:10
 */
"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://www.shuqin.cc";
  }, []);
  return <div />;
}
