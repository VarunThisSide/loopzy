"use client"
import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";
import { useState , useEffect} from "react";
import VideoFeed from "./components/VideoFeed";

export default function Home() {
  
  const [videos, setVideos] = useState<IVideo[]>([])

  useEffect(() => {
    const fetchVideos = async ()=>{
      try {
        const data = await apiClient.getVideos()
        setVideos(data)
      } catch (error) {
        console.error("Error fetching videos ", error);
      }
    }


    fetchVideos()
    console.log(videos);
    
  },[videos])
  

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-[Satisfy]">Share your moments in short, engaging videos. </h1>
      <VideoFeed videos={videos} />
    </main>
  );
}
