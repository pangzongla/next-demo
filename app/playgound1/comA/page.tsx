/*  */
import React from "react";
import { fetchRevenue } from "@/app/lib/data";

export default async function ComA() {
  const revenue = await fetchRevenue();
  console.log(revenue);
  return (
    <div>
      <span>ComA组件</span>
      {revenue &&
        revenue.map((item, index) => {
          return (
            <div key={index}>
              {item.month} : {item.revenue}
            </div>
          );
        })}
    </div>
  );
}
