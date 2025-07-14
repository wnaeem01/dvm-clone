import Link from "next/link"
const MediaLinks = ({MediaArray}:any) => {
    const svg = MediaArray.map((item:any, index:number) => {
        return (
            <li key={index}>
                <Link  href={''} className="flex mx-1">
                    {item}
                </Link>
            </li>
        )
    })
  return (
    <>
    {svg}
    </>
  )
}

export default MediaLinks