import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
}

export function Input({ label, icon: Icon, ...props }: InputProps) {
  return (
    <div className="space-y-1.5 w-full">
      <label className="text-xs font-bold text-dark-secondary uppercase tracking-wider">{label}</label>
      <div className="relative flex items-center">
        <Icon className="absolute left-4 text-gray-400" size={18} />
        <input
          {...props}
          className="w-full bg-white border border-gray-200 rounded-pwa py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all shadow-sm text-dark-primary"
        />
      </div>
    </div>
  );
}