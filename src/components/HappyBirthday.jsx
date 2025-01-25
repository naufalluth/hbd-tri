import { HeroSection } from "./HeroSection"
import DraggableCard from "./DraggableCard"
import { useEffect } from "react"
import { NavigationBar } from "./NavigationBar"
export default function HappyBirthday() {

    useEffect(() => {
        // Play the birthday song
        const audio = new Audio('/song/happy-birthday.mp3');
        audio.loop = true;
        audio.play();
    })
    return (
        <div className="flex flex-col justify-center items-center overflow-x-hidden relative">
            <NavigationBar />
            <HeroSection />
            <DraggableCard />
        </div>
    )
}