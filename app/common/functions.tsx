import Link from "next/link";
export function itemsToList(items: [string, string][]) {
  return items.map(([key, value]) => (
    <Link key={key} dangerouslySetInnerHTML={{ __html: value }} href={''}></Link>
  ));
}