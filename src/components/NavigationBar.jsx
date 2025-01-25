import Link from "next/link"
import { motion } from "framer-motion"

const links = [
    { href: "/", label: "Home" },
    { href: "#wish-card", label: "Wish" },
]

import { love_light } from "../app/fonts"
export const NavigationBar = () => {
    return (
        <div className={`${love_light.className} w-full h-16 bg-none flex justify-center items-center absolute mt-4 top-0 text-pink-700 text-2xl`}>
            <ul className="flex justify-center items-center gap-4  ">
                {links.map(({ href, label }) => (
                    <motion.li whileHover={{ scale: 1.1, rotate: 10 }} className="hover:font-semibold" key={`${href}${label}`}>
                        <Link href={href}>
                            {label}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </div >
    )
}

