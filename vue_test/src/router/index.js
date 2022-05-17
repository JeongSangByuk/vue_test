import { createRouter, createWebHistory } from "vue-router";
import MainHome from "@/views/2_pages/MainHome";
import UserLogin from "@/views/2_pages/UserLogin";
import RoomCreation from "@/views/2_pages/RoomCreation";
import RoomEntry from "@/views/2_pages/RoomEntry";
import InterviewRoom from "@/views/2_pages/InterviewRoom";
import VideoTest from "@/views/2_pages/VideoTest";
import InterviewAnalysis from "@/views/2_pages/InterviewAnalysis";

import WordcloudTest from "@/views/2_pages/WordcloudTest";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainHome,
  },
  {
    path: "/login",
    name: "Login",
    component: UserLogin,
  },
  {
    path: "/room-creation",
    name: "RoomCreation",
    component: RoomCreation,
  },
  {
    path: "/room-entry",
    name: "RoomEntry",
    component: RoomEntry,
  },
  {
    path: "/interview-room",
    name: "InterviewRoom",
    component: InterviewRoom,
  },
  {
    path: "/video-test",
    name: "VideoTest",
    component: VideoTest,
  },
  {
    path: "/interview-analysis",
    name: "InterviewAnalysis",
    component: InterviewAnalysis,
  },
  
  {
    path: "/wordcloud-test",
    name: "WordcloudTest",
    component: WordcloudTest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
