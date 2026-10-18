import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type HeroSlide = {
  src: string;
  alt: string;
  label: string;
};

const slides: HeroSlide[] = [
  { src: '/images/hero-1.png', alt: 'White Foam detergent campaign with fresh clothes and bubbles', label: 'Laundry campaign' },
  { src: '/images/hero-2.png', alt: 'White Foam product being tested in a fabric care laboratory', label: 'Laboratory campaign' },
  { src: '/images/hero-3.png', alt: 'White Foam campaign with clothes drying outdoors and fresh laundry', label: 'Fresh laundry campaign' },
];

const transitionDuration = 850;

function SlideArtwork({ slide }: { slide: HeroSlide }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [slide.src]);

  if (failed) {
    return (
      <div className="hero-slide-fallback" role="img" aria-label={`${slide.alt}. Image file not found: ${slide.src}`}>
        <span>{slide.label}</span>
        <code>{slide.src}</code>
      </div>
    );
  }

  return <img className="hero-slide-image" src={slide.src} alt={slide.alt} onError={() => setFailed(true)} />;
}

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');
  const [paused, setPaused] = useState(false);
  const activeIndexRef = useRef(activeIndex);
  const transitionTimerRef = useRef<number | null>(null);

  activeIndexRef.current = activeIndex;

  const moveTo = (nextIndex: number, travel: 'next' | 'previous') => {
    const currentIndex = activeIndexRef.current;
    if (currentIndex === nextIndex) return;

    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current);
    }

    setDirection(travel);
    setOutgoingIndex(currentIndex);
    setActiveIndex(nextIndex);
    activeIndexRef.current = nextIndex;
    transitionTimerRef.current = window.setTimeout(() => {
      setOutgoingIndex(null);
      transitionTimerRef.current = null;
    }, transitionDuration);
  };

  const moveBy = (offset: -1 | 1) => {
    const nextIndex = (activeIndexRef.current + offset + slides.length) % slides.length;
    moveTo(nextIndex, offset > 0 ? 'next' : 'previous');
  };

  useEffect(() => {
    slides.forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const interval = window.setInterval(() => moveBy(1), 3500);
    return () => window.clearInterval(interval);
  }, [paused]);

  useEffect(() => () => {
    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current);
    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveBy(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveBy(1);
    }
  };

  return (
    <section
      className="hero-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="White Foam campaign banners"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="hero-carousel-stage">
        {slides.map((slide, index) => {
          const isCurrent = index === activeIndex;
          const isOutgoing = index === outgoingIndex;
          const classes = [
            'hero-carousel-slide',
            isCurrent ? 'is-current' : '',
            isOutgoing ? `is-leaving-${direction === 'next' ? 'left' : 'right'}` : '',
            isCurrent && outgoingIndex !== null ? `is-entering-${direction === 'next' ? 'right' : 'left'}` : '',
            !isCurrent && !isOutgoing ? 'is-hidden' : '',
          ].filter(Boolean).join(' ');

          return (
            <div className={classes} key={slide.src} aria-hidden={!isCurrent}>
              <SlideArtwork slide={slide} />
            </div>
          );
        })}
        <button className="hero-carousel-arrow hero-carousel-previous" type="button" aria-label="Previous banner" onClick={() => moveBy(-1)}>
          <ChevronLeft aria-hidden="true" />
        </button>
        <button className="hero-carousel-arrow hero-carousel-next" type="button" aria-label="Next banner" onClick={() => moveBy(1)}>
          <ChevronRight aria-hidden="true" />
        </button>
        <div className="hero-carousel-pagination" role="group" aria-label="Choose campaign banner">
          {slides.map((slide, index) => (
            <button
              className={`hero-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
              key={slide.src}
              type="button"
              aria-label={`Show ${slide.label.toLowerCase()}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => moveTo(index, index > activeIndex ? 'next' : 'previous')}
            />
          ))}
        </div>
        <span className="hero-carousel-status" aria-live="polite">Slide {activeIndex + 1} of {slides.length}</span>
      </div>
    </section>
  );
}
