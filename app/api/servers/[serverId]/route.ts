import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const serverId = params.serverId;
    const profile = await currentProfile();
    if (!profile) {
      return new NextResponse("请先登录", { status: 401 });
    }
    const { name, imageUrl } = await req.json();
    const server = await db.server.update({
      where: { id: serverId, profileId: profile.id },
      data: {
        name,
        imageUrl,
      },
    });
    return NextResponse.json(server);
  } catch (e) {
    console.log("[SERVER_ID_PATCH]", e);
    return new NextResponse("服务器错误", { status: 500 });
  }
}
