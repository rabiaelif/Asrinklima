'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';


const Split = () => {
  const router = useRouter();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string, path: string) => {
    setOpenSection(openSection === section ? null : section);
    router.push(path);
  };

  return (
    <div className="min-h-screen p-4">
  Split Klima vaov
    </div>
  );
};

export default Split;
