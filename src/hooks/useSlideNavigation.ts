import { useState, useCallback, useEffect } from 'react';

interface UseSlideNavigationProps {
  totalSlides: number;
  onSlideChange?: (slideIndex: number) => void;
}

export const useSlideNavigation = ({ totalSlides, onSlideChange }: UseSlideNavigationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide((prev) => {
      if (index < 0 || index >= totalSlides || index === prev) return prev;
      setDirection(index > prev ? 'next' : 'prev');
      onSlideChange?.(index);
      return index;
    });
  }, [totalSlides, onSlideChange]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev >= totalSlides - 1) return prev;
      setDirection('next');
      onSlideChange?.(prev + 1);
      return prev + 1;
    });
  }, [totalSlides, onSlideChange]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev <= 0) return prev;
      setDirection('prev');
      onSlideChange?.(prev - 1);
      return prev - 1;
    });
  }, [onSlideChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  // Touch/swipe navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  return {
    currentSlide,
    direction,
    isAnimating,
    goToSlide,
    nextSlide,
    prevSlide,
    isFirstSlide: currentSlide === 0,
    isLastSlide: currentSlide === totalSlides - 1,
    progress: ((currentSlide + 1) / totalSlides) * 100,
  };
};
