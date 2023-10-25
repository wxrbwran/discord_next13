import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function
const handleAuth = () => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("用户信息出错");
  }
  return { userId };
};
export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete((res) => {
      console.log("serverImage res", res);
    }),
  messageFile: f(["image", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete((res) => {
      console.log("messageFile res", res);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
