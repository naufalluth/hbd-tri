"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BirthdayCardApp() {
    const cards = [
        { id: '4', message: 'Celebrate and enjoy your day! 🎊' },
        { id: '3', message: 'Hope your day is as special as you are! 🎁' },
        { id: '2', message: 'Wishing you all the best! 🎂' },
        { id: '1', message: 'Happy Birthday to You! 🎉' },
        { id: '0', message: "Geser aku dong sayang💌!!" },
    ];


    const [positions, setPositions] = useState(
        cards.map((_, index) => ({
            x: index,
            y: index,
        }))
    );

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
                backgroundColor: '#f4f4f4',
                position: 'relative',
                overflow: 'hidden',
            }}
            className='flex justify-center items-center'
        >
            {cards.map((card, index) => (
                <motion.div
                    key={card.id}
                    drag
                    dragMomentum={false}
                    onDrag={(event, info) => handleDrag(index, event, info)}
                    style={{
                        position: 'absolute',
                        x: positions[index].x,
                        y: positions[index].y,
                        width: '350px',
                        height: '250px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        padding: '20px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        cursor: 'grab',
                    }} className='flex justify-center items-center text-lg'
                >
                    {card.message}
                </motion.div>
            ))}
        </div>
    );
}
