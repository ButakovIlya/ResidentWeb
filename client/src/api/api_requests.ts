import { FormData } from "../interfaces/FormData";

class AdminApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request(endpoint: string, method: string, body?: any) {
    try {
      const csrfToken =
        (document.cookie.match(/csrftoken=(.+)/) || [])[1] || "";
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return { data, success: true };
    } catch (error) {
      return { data: 0, success: false, error: "Error" };
    }
  }

  public async send_mail(form_data: FormData) {
    return this.request("create_user/", "POST", form_data);
  }
}

const adminApi = new AdminApi("http://127.0.0.1:8000/api");

export default adminApi;
