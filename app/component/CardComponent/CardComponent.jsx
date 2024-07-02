"use client"
import React, { useState, useRef, useEffect } from 'react';
import './CardComponent.css';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { gsap } from 'gsap';

const CardComponent = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const hiddenCardRef = useRef(null);
    const upperCardsRef = useRef([]);
    const cursorRef = useRef(null);

    useEffect(() => {
        console.log('cursorRef:', cursorRef.current);
        const handleMouseEnter = () => {
            console.log('Mouse entered card container');
            gsap.to(cursorRef.current, {
                scale: 4,
                backgroundColor: "rgba(60,170,53,0.5)",
                duration: 0.3,
                ease: 'power1.inOut',
            });
        };
        const handleMouseLeave = () => {
            console.log('Mouse left card container');
            gsap.to(cursorRef.current, {
                scale: 0,
                backgroundColor: "#f5f5f5",
                duration: 0.3,
                ease: 'power1.inOut',
            });
        };

        const handleMouseMove = (e) => {

            console.log('Mouse move:', e.clientX, e.clientY);
            gsap.set(cursorRef.current, { x: e.clientX, y: e.clientY }); // set initial position
            gsap.to(cursorRef.current, {
              x: e.clientX,
              y: e.clientY,
              duration: 0.3,
              ease: 'power1.out',
            });
          };


        const cardContainer = document.querySelector('.card_container');

        if (cardContainer) {
            cardContainer.addEventListener('mouseenter', handleMouseEnter);
            cardContainer.addEventListener('mouseleave', handleMouseLeave);
            cardContainer.addEventListener('mousemove', handleMouseMove);
        }



        return () => {
            if (cardContainer) {
                cardContainer.removeEventListener('mouseenter', handleMouseEnter);
                cardContainer.removeEventListener('mouseleave', handleMouseLeave);
                cardContainer.removeEventListener('mousemove', handleMouseMove);
            }



        };
    }, []);




    
    useEffect(() => {
        if (hoveredCard !== null) {
            // Animation for hidden card
            gsap.from(hiddenCardRef.current, {
                x: -4000,
                opacity: 0,
                duration: 0.3,
                ease: "back.out(1.7)",
            });

            // Animation for upper cards
            gsap.to(upperCardsRef.current[hoveredCard - 1], {
                x: -10,
                duration: 0.3,
                ease: "power1.inOut",
            });
        } else {
            // Reset animation for upper cards when not hovered
            gsap.to(upperCardsRef.current, {
                x: 0,
                duration: 0.3,
                ease: "power1.inOut",
            });
        }
    }, [hoveredCard]);



    const cards = [
        {
            id: 1,
            image: '/Group 744.svg',
            content: '',
            hiddenImage: '',
            hiddenHeading: 'Odour Control',
            hiddenParagraph: 'Regenerative catalyst and wet scrubbers',
            hiddencontent: 'We have a range of odour control and management systems based on wet scrubbers, venturi scrubbers, carbon filter, regenerative catalyst,centrifugal separators, and plasma systems.',
        },
        {
            id: 2,
            image: '/Group 745.svg',
            content: '',
            hiddenImage: '',
            hiddenHeading: 'Automation & IOT',
            hiddenParagraph: 'Electrical Control Panels',
            hiddencontent: 'We are mechatronic engineering experts and have more than 15 years of experience of delivering complex electrical control panels, with integrated automation and internet of things (IoT).',

        },
        {
            id: 3,
            image: '/Group 415.svg',
            content: '',
            hiddenImage: '',
            hiddenHeading: 'Net-Zero',
            hiddenParagraph: 'Organic & food waste management',
            hiddencontent: 'In today’s business environment, no company can afford to waste money - or waste the planet! It’s a fact that waste is an essential part of providing food products and services. ',

        },
        {
            id: 4,
            image: '/Group 416.svg',
            content: '',
            hiddenImage: '',
            hiddenHeading: 'Consultancy',
            hiddenParagraph: 'FEED and EPC',
            hiddencontent: "Our project development arm offering Engineering, Procurement, Construction (EPC) and Project Management is a leader in facility design for the refined fuels, renewable fuels, renewable energy,  fertiliser, and  transportation  industries. ",


        },
    ];

    return (
        <>
    <div ref={cursorRef} className="cur__sor z-50">
    </div>
            <div className={`card_container flex flex-col md:flex-row py-[60px] px-[120px] ${hoveredCard ? 'expanded' : ''}`}
                onMouseLeave={() => setHoveredCard(null)}
            >
                {cards.map((card, index) => (
                    <React.Fragment key={card.id}>
                        <div ref={el => upperCardsRef.current[index] = el}
                            className={`ca_rd z-10 ${hoveredCard === card.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredCard(card.id)}
                        >
                            <Image src={card.image} alt={card.content} className="card_image w-full h-full" width={100} height={100} />
                            <div className="card-content">{card.content}</div>
                        </div>
                        {hoveredCard === card.id && (
                            <div ref={hiddenCardRef} className={`hidden_card z-[0] ${hoveredCard === card.id ? 'visible' : ''} flex flex-col gap-4`}>

                                <h3 className='mcLarenFont text-[22px] text-[#312C85]'>{card.hiddenHeading}</h3>
                                <h2 className='font-bold  text-[30px] text-[#3CAA35]'>{card.hiddenParagraph}</h2>
                                <p className='font-semibold  text-[18px] text-[#7e8287]'>{card.hiddencontent}</p>
                                <button className='sol_btn font-medium  text-[20px] text-[#312C85] text-start flex items-center transition-all ease-in-out duration-300 gap-1 group'>Go to details<span><FaArrowRight className={`group-hover:visible group-hover:translate-x-3 ease-in-out duration-300 `} /></span></button>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div></>
    );
};

export default CardComponent;
