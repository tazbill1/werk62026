import { ChevronLeft, ChevronRight, Maximize, Minimize, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface NavigationControlsProps {
  onPrev: () => void;
  onNext: () => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
}

export const NavigationControls = ({ 
  onPrev, 
  onNext, 
  isFirstSlide, 
  isLastSlide 
}: NavigationControlsProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handlePrint = () => {
    window.open('/print', '_blank');
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 print:hidden">
      <div className="flex items-center gap-1 bg-background/95 backdrop-blur-md border border-border/60 rounded-full px-2 py-2 shadow-xl">
        <Button
          variant="ghost"
          onClick={onPrev}
          disabled={isFirstSlide}
          className="h-11 px-3 rounded-full hover:bg-primary/10 disabled:opacity-30 flex items-center gap-1.5 text-sm font-medium"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="hidden sm:inline">Back</span>
        </Button>
        
        <div className="w-px h-5 bg-border mx-1" />
        
        <Button
          variant="ghost"
          onClick={onNext}
          disabled={isLastSlide}
          className="h-11 px-3 rounded-full hover:bg-primary/10 disabled:opacity-30 flex items-center gap-1.5 text-sm font-medium"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div className="w-px h-5 bg-border mx-1" />

        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrint}
          className="h-11 w-11 rounded-full hover:bg-primary/10"
          title="Print presentation"
        >
          <Printer className="h-5 w-5" />
        </Button>

        <div className="w-px h-5 bg-border mx-1" />

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFullscreen}
          className="h-11 w-11 rounded-full hover:bg-primary/10"
          title="Toggle fullscreen"
        >
          {isFullscreen ? (
            <Minimize className="h-5 w-5" />
          ) : (
            <Maximize className="h-5 w-5" />
          )}
        </Button>
      </div>
      <div className="text-[10px] text-muted-foreground/70 hidden sm:block">
        Use arrow keys, space, or swipe to navigate
      </div>
    </div>
  );
};
