"use client";
import { useEffect, useRef, useState } from "react";
import videos from './data/videos';
import { FaVolumeOff, FaVolumeUp } from "react-icons/fa";
import { convertTimeToString } from "./utils/Utils";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoURL, setVideoURL] = useState(videos[0].url);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(videos[0].duration);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const configVideo = (index: number) => {
    const selectedVideo = videos[index];
    setVideoURL(selectedVideo.url);
    setTotalTime(selectedVideo.duration);
    setCurrentTime(0);
    setMuted(false);
  };

  return (
    <main className="mx-auto w-[80%] mt-2 flex flex-col items-center">
      <div className="w-full mb-4">
        <video
          className="w-full rounded-lg shadow-lg"
          ref={videoRef}
          src={videoURL}
          controls
          onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
          onLoadedMetadata={() => {
            if (videoRef.current) {
              setTotalTime(videoRef.current.duration);
            }
          }}
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {videos.map((video, index) => (
          <button key={index} className="flex items-center m-2" onClick={() => configVideo(index)}>
            <img className="w-[150px] h-[100px] rounded-lg shadow-md mr-2" src={video.imageURL} alt={`Thumbnail do vídeo ${index + 1}`} />
            <div className="text-white text-left">
              <h3 className="font-semibold">{video.title}</h3>
              <p>{video.description}</p>
              <p className="text-gray-400">{convertTimeToString(video.duration)}</p>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}
