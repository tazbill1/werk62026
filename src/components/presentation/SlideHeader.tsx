import werkLogo from '@/assets/werkandme-logo.png';
import werkLogoReverse from '@/assets/werkandme-logo-reverse.png.asset.json';

interface SlideHeaderProps {
  showLogo?: boolean;
  light?: boolean;
}

export const SlideHeader = ({ showLogo = true, light = false }: SlideHeaderProps) => {
  if (!showLogo) return null;
  
  return (
    <div className="absolute top-6 left-8 z-10">
      <img 
        src={light ? werkLogoReverse.url : werkLogo} 
        alt="WerkandMe" 
        className="h-8 w-auto"
      />
    </div>
  );
};
