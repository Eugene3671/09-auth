import axios from "axios";


const myKey: string = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN!;

export const nextServer = axios.create({
  baseURL: '09-auth-omega-eight.vercel.app/api',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${myKey}`,
  }
});

