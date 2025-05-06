'use client';
import React, { useState, useRef } from 'react';

interface Category {
  name: string;
  hasIcon?: boolean;
}

interface CategoryMarqueeProps {
  categories: Category[];
}

const CategoryMarquee: React.FC<CategoryMarqueeProps> = ({ categories }) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  // Duplicate array for seamless loop
  const duplicatedCategories = [...categories, ...categories];

  const [scrollPosition, setScrollPosition] = useState(0);

  // Use useRef to store the animation frame ID
  const animationRef = useRef<number | null>(null);
  const speed = useRef(1); // Normal speed is 1, slow is 0.3

  // Update speed based on hover state
  React.useEffect(() => {
    speed.current = isHovering ? 0.3 : 1;
  }, [isHovering]);

  // Animation loop
  const animate = () => {
    setScrollPosition((prev) => {
      // Reset when scrolled 50% (for seamless looping)
      if (prev <= -50) {
        return 0;
      }
      return prev - 0.05 * speed.current;
    });
    animationRef.current = requestAnimationFrame(animate);
  };

  // Start and cleanup animation
  React.useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      className="w-full bg-[#13172b] py-4 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={containerRef}
    >
      <div
        className="flex items-center"
        style={{
          transform: `translateX(${scrollPosition}%)`,
        }}
      >
        {duplicatedCategories.map((category, index) => (
          <div key={index} className="flex items-center whitespace-nowrap mx-4">
            <button className="font-bold text-white text-2xl md:text-3xl lg:text-4xl tracking-wide whitespace-nowrap hover:text-amber-300 transition-colors">
              {category.name}
            </button>
            {category.hasIcon && (
              <svg
                className="w-5 h-5 md:w-6 md:h-6 ml-2 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* No need for keyframes animation style anymore */}
    </div>
  );
};

export default CategoryMarquee;
