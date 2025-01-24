"use client";

import DraggableCard from "@/components/DraggableCard";
import { IdentityForm } from "@/components/IdentityForm";
import { useState, useEffect, useRef } from "react";

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
          <DraggableCard children />

        </div>
      )}
    </main>
  );
}