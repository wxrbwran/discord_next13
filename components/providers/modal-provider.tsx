"use client";

import { useModal } from "@/hooks/use-modal-store";
import CreateServerModal from "../modals/create-server-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  // const { isOpen, onClose, type } = useModal();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <CreateServerModal />
    </div>
  );
};

export default ModalProvider;
