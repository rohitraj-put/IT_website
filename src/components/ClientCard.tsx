import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

function ClientCard() {
    const clientCards = [
        { name: "SAP", logo: "https://namratauniversal.com/img/client-8.jpg" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-9.png" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-10.png" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-14.png" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-13.png" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-18.png" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-17.png" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-19.jpeg" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-20.jpg" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-22.png" },
        { name: "SAP", logo: "https://jingleholidaybazar.com/images/mainlogo.gif" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-25.jpeg" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-26.png" },
        { name: "Google", logo: "https://namratauniversal.com/img/client-16.png" },
        { name: "LinkedIn", logo: "https://namratauniversal.com/img/client-23.png" },
        { name: "Yahoo", logo: "https://namratauniversal.com/img/client-15.png" },
        { name: "Amazon", logo: "https://namratauniversal.com/img/client-5.jpg" },
        { name: "Netflix", logo: "https://namratauniversal.com/img/client-6.jpg" },
        { name: "Mac OS", logo: "https://namratauniversal.com/img/client-1.jpg" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-21.png" },
        { name: "Dell", logo: "https://namratauniversal.com/img/client-2.jpg" },
        { name: "HP", logo: "https://namratauniversal.com/img/client-3.jpg" },
        { name: "IBM", logo: "https://namratauniversal.com/img/client-11.png" },
        { name: "SAP", logo: "https://namratauniversal.com/img/client-12.png" }
    ];

    // Use media queries to determine the number of items per page
    const isMediumScreen = useMediaQuery({ query: '(max-width: 768px)' });
    const itemsPerPage = isMediumScreen ? 2 : 6;

    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if ((currentPage + 1) * itemsPerPage < clientCards.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * itemsPerPage;
    const visibleClients = clientCards.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="mt-16">
            <div className="flex justify-end items-center mb-4">
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 bg-tech-600 text-white cursor-pointer rounded-md mr-2"
                    disabled={currentPage === 0}
                >
                    <ChevronLeft/>
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-tech-600 text-white cursor-pointer rounded-md"
                    disabled={(currentPage + 1) * itemsPerPage >= clientCards.length}
                >
                    <ChevronRight/>
                </button>
            </div>
            <p className="text-center text-sm text-gray-500 mb-6">TRUSTED BY LEADING COMPANIES</p>
            <div className="flex flex-wrap justify-center gap-2">
                {visibleClients.map((client, index) => (
                    <div className="w-48 h-24 p-2 bg-white" key={index}>
                        <img className="w-full h-full object-contain" src={client.logo} alt={client.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientCard;