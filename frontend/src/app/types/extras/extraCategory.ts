import { ExtraItem } from "./extraItem";

export interface ExtraGroup {
  id: string;
  title: string;
  description?: string;
  min: number;
  max: number;
  items: ExtraItem[];
}