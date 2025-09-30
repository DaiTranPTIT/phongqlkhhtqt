import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Tag {
  id: string;
  name: string;
  description: string;
}

export interface ApiResponse<T> {
  items: T[];
}

export async function getAllTags(): Promise<ApiResponse<Tag>> {
  const url = `${API_URL}/api/tags`; 
  const res = await axios.get(url);

  const rawItems = res.data.data || []; 

  const normalized: ApiResponse<Tag> = {
    items: rawItems.map((item: any) => ({
      id: item.id,
      name: item.name,
      description: item.description,
    })),
  };

  return normalized;
}
