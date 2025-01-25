"use client";

import DraggableCard from "@/components/DraggableCard";
import { IdentityForm } from "@/components/IdentityForm";
import { HeroSection } from "@/components/HeroSection";
import { useState, useEffect, useRef } from "react";
import HappyBirthday from "@/components/HappyBirthday";

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (verified) => {
    setIsVerified(verified);
  };

  return (
    <main>
      {!isVerified ? (
        <IdentityForm onVerify={handleVerification} />
      ) : (
        <div>
          <HappyBirthday />
        </div>
      )}
    </main>
  );
}