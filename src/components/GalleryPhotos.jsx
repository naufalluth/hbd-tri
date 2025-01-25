import { motion } from "framer-motion"
import Image from "next/image"
import { love_light } from "@/app/fonts"

const GalleryPhotos = () => {
    const imagelist = [
        { id: 1, src: "/gallery/image-1.jpg", alt: "Tri Photo's" },
        { id: 2, src: "/gallery/image-2.jpg", alt: "Tri Photo's" },
        { id: 3, src: "/gallery/image-3.jpg", alt: "Tri Photo's" },
        { id: 4, src: "/gallery/image-4.jpg", alt: "Tri Photo's" },
        { id: 5, src: "/gallery/image-5.jpg", alt: "Tri Photo's" },
        { id: 6, src: "/gallery/image-7.png", alt: "Tri Photo's" },
        { id: 7, src: "/gallery/image-6.jpg", alt: "Tri Photo's" },
        { id: 8, src: "/gallery/image-8.jpg", alt: "Tri Photo's" },
        { id: 9, src: "/gallery/image-9.jpg", alt: "Tri Photo's" },
        { id: 10, src: "/gallery/image-10.jpg", alt: "Tri Photo's" }
    ]

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.1 }
    }

    return (
        <>
            <motion.div className={`${love_light.className} my-[10rem] w-full`}>
                <div className="">
                    <h1 className={`text-5xl text-center text-rose-700 hover:scale-110 duration-500 ease-in-out delay-150`} id="gallery">Prettiest Pictures of You</h1>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 bg-rose-100 p-10 mt-4 w-full"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.5
                                }
                            }
                        }}
                    >
                        {imagelist.map((image) => (
                            <motion.div
                                key={image.id}
                                variants={imageVariants}
                                whileHover="hover"
                                initial="hidden"
                                animate="visible"
                                className="p-2"
                            >
                                <Image
                                    src={image.src}
                                    width={250}
                                    height={250}
                                    alt={image.alt}
                                    className="rounded-xl object-cover w-full h-full"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}
export default GalleryPhotos;
