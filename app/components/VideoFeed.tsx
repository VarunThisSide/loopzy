import { IVideo } from "@/models/Video";
import VideoComponent from "./VideoComponent";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface VideoFeedProps {
  videos: IVideo[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {

  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <VideoComponent key={video._id?.toString()} video={video} />
      ))}
      
      {!session && (
        <div className="col-span-full text-center py-12 flex flex-col items-center">
          <Image src={'/login-to-watch.svg'} width={300} height={300} alt="Login to watch videos"></Image>
        </div>
      )}

      {session && videos.length === 0 && (
        <div className="col-span-full text-center py-12 flex flex-col items-center">
          <Image src={'/no-videos.svg'} width={300} height={300} alt="No videos to display"></Image>
        </div>
      )}
    </div>
  );
}