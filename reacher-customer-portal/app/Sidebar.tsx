import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const router = typeof window !== "undefined" ? require("next/router").default : null;
  const pathname = router ? router.useRouter().pathname : null;

  return (
    <div className="flex-shrink-0 w-64 bg-white flex flex-col relative shadow-md">
      {/* Company logo */}
      <div className="p-4 flex justify-center items-center">
        <Image src="/reacherlogo.png" alt="Reacher Logo" width={150} height={50} />
      </div>
      
      {/* Navigation buttons */}
      <nav className="flex flex-col items-center space-y-4">
        <Link href="/dashboard" className={`btn py-10px ${pathname === "/dashboard" ? "bg-blue-100" : ""}`}>
            Dashboard
        </Link>
        <Link href="/automations" className={`btn py-10px ${pathname === "/automations" ? "bg-blue-100" : ""}`}>
            Automations
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
