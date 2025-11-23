import React from 'react';

export const SectionDivider: React.FC = () => (
  <div className="flex items-center justify-center py-16 opacity-60">
    <div className="h-px bg-jung-gold w-32 mx-6"></div>
    <div className="w-5 h-5 rotate-45 border-2 border-jung-gold"></div>
    <div className="h-px bg-jung-gold w-32 mx-6"></div>
  </div>
);

export const DecorativeFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative p-2 ${className}`}>
    {/* Corner decorations - Art Nouveau style */}
    <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-jung-gold rounded-tl-xl pointer-events-none"></div>
    <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-jung-gold rounded-tr-xl pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-jung-gold rounded-bl-xl pointer-events-none"></div>
    <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-jung-gold rounded-br-xl pointer-events-none"></div>
    
    <div className="border-2 border-jung-gold/30 p-8 h-full bg-jungLight-bg/80 dark:bg-jungDark-bg/80 backdrop-blur-sm shadow-lg transition-all duration-500 hover:border-jung-gold">
      {children}
    </div>
  </div>
);

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'outline';
}

export const VintageButton: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-block px-12 py-5 font-display tracking-widest uppercase text-lg font-bold transition-all duration-300 relative overflow-hidden group cursor-pointer text-center select-none";
  const primaryStyle = "bg-jung-gold text-jungLight-text hover:bg-jung-goldDim shadow-md";
  const outlineStyle = "border-2 border-jung-gold text-jung-gold hover:bg-jung-gold hover:text-jungLight-text";

  return (
    <div className={`${baseStyle} ${variant === 'primary' ? primaryStyle : outlineStyle} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-white/10"></div>
    </div>
  );
};

export const TitleHeading: React.FC<{ children: React.ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
  <div className="text-center mb-20">
    <h2 className="text-6xl md:text-7xl font-display text-jung-gold mb-8 tracking-wide drop-shadow-sm font-bold">
      {children}
    </h2>
    {subtitle && (
      <p className="text-jungLight-text/90 dark:text-jungDark-text/90 font-sans tracking-[0.2em] text-lg font-bold uppercase">
        — {subtitle} —
      </p>
    )}
  </div>
);