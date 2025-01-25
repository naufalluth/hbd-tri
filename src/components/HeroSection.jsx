import { love_light, inter } from "@/app/fonts"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import CurvedArrow from "./Arrow"

export const HeroSection = () => {
    return (
        <motion.div className="w-full h-screen bg-pink-50 flex justify-center items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className={`${love_light.className} m-28 text-center flex gap-8 justify-center items-center bg-rose-200 w-fit h-92 px-8 py-4 rounded-xl shadow-md`}>
                <div className="text-left flex flex-col gap-7 justify-between items-start relative">
                    <div>
                        <motion.h1 className="text-[5rem] text-pink-700" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                            Happy Birthday Tri
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-3xl"
                        >
                            Selamat ulang tahun manusia paling cantik di Dunia iniiiii💖💗💖
                        </motion.p>
                    </div>
                    <motion.div initial={{ x: 0 }} whileHover={{ x: 10 }} transition={{ duration: 0.3 }} className="w-full">
                        <button className={inter.className}>
                            <Link legacyBehavior href="#wish-card">
                                <a className="bg-pink-500 hover:bg-pink-700 text-white text-md font-semibold py-2 px-8 rounded focus:outline-none focus:shadow-outline w-full">Doa untuk Kamu</a>
                            </Link>
                        </button>
                    </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.2, rotate: 15 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }} className="relative">
                    <div>
                        <Image src="/hero/image1.png" width={280} height={280} alt="Tri Photo's" />
                        <motion.div
                            initial={{ scale: 0.5 }}
                            whileHover={{ scale: 1.5 }}
                            className="absolute -top-8 left-28 text-pink-300"
                        >
                            <div className="flex flex-col text-rose-200 hover:text-rose-800">
                                <Image src="/hero/mahkota-1.svg" alt="Tri Photo's" width={80} height={80} />

                                <motion.p className="text-xl   relative -top-10 left-[5rem] x-[50%]" initial={{ scale: 1 }} whileHover={{ scale: 1 }} transition={{ duration: 0.5 }}>
                                    The Birthday Gurl
                                </motion.p>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div >
        </motion.div >
    )
}