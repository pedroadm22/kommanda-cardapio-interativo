interface UserContextProps {
  userName: string;
  tableNumber: string;
}

export function UserContext({ userName, tableNumber }: UserContextProps) {
  return (
    <div className="flex flex-col">
      <span className="font-body text-sm text-gray-500">
        Olá, <span className="font-bold text-gray-900">{userName}</span>
      </span>
      <div className="flex items-center gap-2 mt-1">
        <span className="font-body text-[10px] uppercase tracking-widest text-gray-400 font-bold">Mesa</span>
        <span className="font-title text-4xl text-brand-500 leading-none">
          {tableNumber}
        </span>
      </div>
    </div>
  );
}