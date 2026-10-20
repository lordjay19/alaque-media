import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

/**
 * Splits text by spaces and slides each word up (y: 20 -> 0) with a staggered delay.
 * When `showAsterisk` is set, a superscript asterisk is anchored to the final
 * character of the last word.
 */
export default function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
}: WordsPullUpProps) {
  const words = text.split(' ');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;

        return (
          <motion.span
            key={`${word}-${i}`}
            initial={reduceMotion ? false : { y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
            style={{ paddingRight: isLastWord ? undefined : '0.25em' }}
          >
            {isLastWord && showAsterisk ? (
              <>
                {word.slice(0, -1)}
                <span className="relative inline-block">
                  {word.slice(-1)}
                  <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
                </span>
              </>
            ) : (
              word
            )}
          </motion.span>
        );
      })}
    </div>
  );
}
