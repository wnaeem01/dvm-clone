import Link from "next/link";
const MenuItems = ({MenuItemsProps}:any) => {
    var MenuItems = MenuItemsProps.map((item:any,index=0) => {
    return <li key={index} className="text-md text-gray-400 hover:text-[#ab45db] transition-colors duration-300 text-decoration-underline">
        <Link href={''}>{item}</Link>
    </li>
    });

  return (
    <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-xs">
    {MenuItems}
    </ul>
  )
}

export default MenuItems