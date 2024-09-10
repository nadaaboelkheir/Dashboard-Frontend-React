import axios from "axios";
export interface Announcement {
    _id: string;
    userName: string;
    subject: string;
    content: string;
  }
  
  
 export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  const response = await axios.get("https://dashboard-backend-expressjs-production.up.railway.app/announcement");
  return response.data.announcements;
};
