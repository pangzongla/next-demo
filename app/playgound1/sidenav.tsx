import Link from "next/link";

// ...
const links = [
  { name: "组件A", href: "/playgound1/comA" },
  { name: "组件B", href: "/playgound1/comB" },
];
export default function SideNav() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
