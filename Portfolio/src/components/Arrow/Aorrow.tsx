import { useEffect, useState } from 'react';
import './Arrow.scss';

export const Arrow = ()=> {
    const [isVisible, setIsVisible] = useState(false);

    //Show button when scrolled down
    useEffect(() => {
        const toggleVisebility = () => {
            setIsVisible(window.scrollY > 300);
        }

        window.addEventListener('scroll', toggleVisebility);
        return () => window.removeEventListener('scroll', toggleVisebility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return<>
    {isVisible && (
        <button
        onClick={scrollToTop}
        className="arrow"
        aria-label="Scroll to top"
        >up
         ↑
        
        </button>
    )}
    
    
    </>
}