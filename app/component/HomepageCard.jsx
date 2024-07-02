import React, { useState } from 'react';

const HomepageCard = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    // Dummy data for cards
    const cards = [
        { id: 1, bgColor: 'bg-gray-500' },
        { id: 2, bgColor: 'bg-gray-500' },
        { id: 3, bgColor: 'bg-gray-500' },
        { id: 4, bgColor: 'bg-gray-500' },
    ];

    // Function to handle card hover
    const handleCardHover = (cardId) => {
        setHoveredCard(cardId);
    };

    // Function to handle card unhover
    const handleCardUnhover = () => {
        setHoveredCard(null);
    };

    return (
        <div className='flex gap-2 justify-between h-full px-[120px] py-[60px] card_container'>
            {cards.map((card, index) => (
                <div key={card.id} className='relative flex-1 h-full'>
                    <div
                        className={`absolute inset-0 ${card.bgColor} h-full rounded-lg card_`}
                        onMouseEnter={() => handleCardHover(card.id)}
                        onMouseLeave={handleCardUnhover}
                    />
                    {hoveredCard === card.id && (
                        <div className='absolute top-0 left-full bg-red-500 h-full rounded-lg sliding_card'>
                            Sliding Content
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
export default HomepageCard;
