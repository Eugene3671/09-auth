import axios from "axios";


const myKey: string = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN!;

export const nextServer = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${myKey}`,
  }
});

