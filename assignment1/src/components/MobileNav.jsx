import {
    LayoutGrid,
    LineChart,
    Globe,
    Bell,
    Network,
  } from "lucide-react";
  
  const navItems = [
    { label: "Dashboard", icon: LayoutGrid },
    { label: "Analytics", icon: LineChart },
    { label: "Connect", icon: Globe },
    { label: "Activity", icon: Bell },
    { label: "Dealroom", icon: Network },
  ];
  
  const MobileNav = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white border-t border-zinc-700 flex justify-around items-center py-2 md:hidden z-50">
        {navItems.map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center text-xs gap-1">
            <Icon size={22} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default MobileNav;
  