export type Video = {
  title: string;
  description: string;
  url: string;
  imageURL: string;
  duration: number;
};

const videos: Video[] = [
  {
    title: "Git 100",
    description: "Git explicado em 100 segundos",
    url: "/videos/git100.mp4",
    imageURL: "/images/gitdicionario.jpg",
    duration: 117,
  },
  {
    title: "Next JS 100",
    description: "JS explicado em 100 segundos",
    url: "/videos/js100.mp4",
    imageURL: "/images/nextjsdicionario.jpg",
    duration: 155,
  }
];

export default videos;
