import type { Author } from "./author";

export interface Post {
  id: string;
  title: string;
  image: Image;
  date: Date;
  description: string;
  author: Author;
  tags: string[];
  isDraft: boolean;
}

export interface Image {
  src: string;
  width: number;
  height: number;
  format: string[];
};
