import { Client } from "../client/Client";

export type Appointment = {
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  location: string | null;
  time: Date | null;
  updatedAt: Date;
};