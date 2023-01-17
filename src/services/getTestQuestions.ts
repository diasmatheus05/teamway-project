import { Question } from "../entities/Question";
import { api } from "./api";

export async function getTestQuestions() {
  try {
    const response = await api.get("/test/questions");
    return response.data as Question[];
  } catch (e) {
    throw new Error();
  }
}
