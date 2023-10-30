"use client";

import { useEffect, useState } from "react";
import { useModal } from "@/hooks/use-modal-store";
import CreateServerModal from "../modals/create-server-modal";
import { InviteModal } from "../modals/invite-modal";

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
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  );
};

export default ModalProvider;
