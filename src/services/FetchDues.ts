import axios from "axios";
export interface Due {
  _id: string;
  title: string;
  topic: string;
  DueTo: string
  courseName: string;
  dueType: "Assignment" | "Quiz"; // Use a union type for enums
}
export const fetchDues = async (): Promise<Due[]> => {
  const response = await axios.get(
    "https://dashboard-backend-expressjs-production.up.railway.app/due"
  );
  return response.data.dues;
};
