"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DraggableCard() {
    const cards = [
        { id: '0', message: 'I 💗 U ' },
        { id: '1', message: `Happy Birthday to You! 🎉` },
        { id: '2', message: 'Semoga wajah kamu selalu dihiasi oleh senyum manis dan kebahagiaan ! 🥰' },
        { id: '3', message: 'Selalu dilancarkan semua urusannya, selalu diberikan kesempatan untuk merasakan semua keindahan dunia ! 🎂' },
        { id: '5', message: 'Semoga diumur yang ke 24 ini selalu diberikan kebahagiaan, dikabulkan semua keinginannya dan tercapai semua mimpi-mimpinyaaa 🎁' },
        { id: '6', message: 'Selamat ulang tahun sayanggg! Panjang umur dan sehat selalu yaaaaa 🎊' },
        { id: '7', message: 'Geser aku dong sayanggg 🌟' },
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
            }} className="flex flex-col justify-center items-center h-screen bg-[url('/bg.svg')] bg-pink-50 bg-cover bg-center w-full bg-no-repeat " id='wish-card'
        >
            {
                cards.map((card, index) => (
                    <motion.div className='px-4 py-1 w-72 h-36'
                        key={card.id}
                        drag
                        dragMomentum={false}
                        whileDrag={{ scale: 1.1 }}
                        whileTap={{ scale: 1.2 }}
                        onDrag={(event, info) => handleDrag(index, event, info)}
                        style={{
                            position: 'absolute',
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
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
