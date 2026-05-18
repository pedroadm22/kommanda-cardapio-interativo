'use client';
import { UserContext } from './UserContext';
import { HeaderActions } from './Actions';

interface HeaderProps {
  userName?: string;
  tableNumber?: string;
}

export function Header({ 
  userName = "Visitante", 
  tableNumber = "10" 
}: HeaderProps) {
  return (
    <header className="w-full bg-white px-6 pt-10 pb-6 rounded-b-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] sticky top-0 z-30">
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        <UserContext userName={userName} tableNumber={tableNumber} />
        <HeaderActions />
      </div>
    </header>
  );
}