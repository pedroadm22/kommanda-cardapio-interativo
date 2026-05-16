interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'ghost';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const styles = {
    primary: "bg-brand-500 hover:bg-brand-600 text-white shadow-brand-500/10",
    accent: "bg-accent-600 hover:bg-accent-700 text-white",
    ghost: "bg-white text-dark-secondary border border-gray-100"
  };

  return (
    <button 
      {...props} 
      className={`rounded-pwa font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${styles[variant]} ${props.className}`}
    >
      {children}
    </button>
  );
}