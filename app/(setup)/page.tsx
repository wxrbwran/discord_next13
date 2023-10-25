import React from "react";
import { redirect } from "next/navigation";
import { initailProfile } from "@/lib/inittail-profile";
import { db } from "@/lib/db";
import InitialModal from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initailProfile();
  console.log("profile", profile);
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  console.log("server", server);

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return (
    <div>
      <InitialModal />
    </div>
  );
};

export default SetupPage;
