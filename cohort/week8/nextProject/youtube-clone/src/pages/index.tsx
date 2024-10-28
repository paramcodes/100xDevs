import {VideoCard} from "@/components/VideoCard";
import {VideoGrid} from "@/components/VideoGrid";
import {AppBar} from "@/components/Appbar";

export default function Home() {
  return (
    <div>
      <AppBar/>
      <VideoGrid/>
    </div>
  );
}
