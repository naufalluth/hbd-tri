"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DraggableCard() {
    const cards = [
        { id: '1', message: 'Happy Birthday to You! 🎉' },
        { id: '2', message: 'Wishing you all the best! 🎂' },
        { id: '3', message: 'Hope your day is as special as you are! 🎁' },
        { id: '4', message: 'Selamat ulang tahun 🎊' },
        { id: '5', message: 'Geser aku dong sayanggg 🌟' },
    ];

    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const centerX = window.innerWidth / 2 - 125; // 125 is half of card width (250px)
        const centerY = window.innerHeight / 2 - 75; // 75 is half of card height (150px)
        setPositions(
            cards.map((_, index) => ({
                x: centerX,
                y: centerY,
            }))
        );

        // Play the birthday song
        const audio = new Audio('/song/happy-birthday.mp3');
        audio.loop = true;
        audio.play();
    }, []);

    const handleDrag = (index, event, info) => {
        const newPositions = [...positions];
        newPositions[index] = {
            x: info.point.x,
            y: info.point.y,
        };
        setPositions(newPositions);
    };

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
            }} className="flex flex-col justify-center items-center h-screen bg-[url('/bg.svg')] bg-pink-50 bg-cover bg-center w-full h-screen bg-no-repeat "
        >
            {
                cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        drag
                        dragMomentum={false}
                        onDrag={(event, info) => handleDrag(index, event, info)}
                        style={{
                            position: 'absolute',
                            width: '250px',
                            height: '150px',
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            padding: '20px',
                            textAlign: 'center',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'grab',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {card.message}
                    </motion.div>
                ))
            }
        </div >
    );
}
