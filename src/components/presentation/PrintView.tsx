import { MotionConfig } from 'framer-motion';
import { DealershipProvider } from '@/contexts/DealershipContext';
import * as Slides from './slides';

// Same order as the live deck (minus the interactive data-entry form).
const slideComponents = [
  Slides.Slide00Cover,
  Slides.SlideThreeQuestions,
  Slides.SlideCostComparison,
  Slides.SlideWorkforceWants,
  Slides.SlideSolution,
  Slides.Slide15EmotionalCheckins,
  Slides.Slide16Dashboard,
  Slides.Slide17Gamification,
  Slides.Slide18Recognition,
  Slides.Slide19Serving,
  Slides.Slide20Training,
  Slides.Slide21Rewards,
  Slides.Slide14AskMe,
  Slides.SlideOnboardingDemo,
  Slides.SlideHelpMe,
  Slides.SlideTextMe,
  Slides.SlideCultureCoach,
  Slides.Slide13Implementation,
  Slides.SlideThankYou,
];

// Dense slides built small for on-screen fit get a closer zoom in print.
const compactSlides = new Set<unknown>([Slides.SlideCostComparison]);

// Each slide renders on a fixed desktop-sized canvas, then is scaled to fill
// one landscape letter page, so the print matches what's shown on screen.
export const PrintView = () => (
  <DealershipProvider>
    <MotionConfig reducedMotion="always">
      <div className="print-container">
        {slideComponents.map((SlideComponent, index) => (
          <div key={index} className="print-slide">
            <div className={`print-canvas${compactSlides.has(SlideComponent) ? ' print-canvas-zoom' : ''}`}>
              <SlideComponent />
            </div>
          </div>
        ))}
      </div>
    </MotionConfig>
  </DealershipProvider>
);
