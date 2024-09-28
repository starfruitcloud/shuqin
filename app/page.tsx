/*
 * :file description:  首页
 * :name: /shuqin/app/page.tsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-28 20:34:17
 * :last editor: 张德志
 * :date last edited: 2024-09-28 23:21:31
 */
"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [data,setData] = useState([])
  const featchTopics = async () => {
    const baseUrl = 'https://cnodejs.org/api/v1'
    const rsp = await fetch(`${baseUrl}/topics`).then((rsp) => rsp.json());
    setData(rsp.data)
  
  };
  useEffect(() => {
    featchTopics();
  }, []);
  return <div>{data.map((item) => <h3 key={item._id}>{item.title}</h3>)}</div>;
}
