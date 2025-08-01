import axios from "axios";

export type ContactFormPayload = {
  name: string;
  category: string;
  phone: string;
  email: string;
  request: string;
};

export async function submitContactForm(payload: ContactFormPayload) {
  const response = await axios.post("https://httpbin.org/post", payload);
  return response.data;
}
