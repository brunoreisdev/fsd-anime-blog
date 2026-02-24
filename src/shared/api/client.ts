export class Client {
  baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || "https://api.jikan.moe/v4";
  }

  async get(endpoint: string, searchParams?: Record<string, string>) {
    const url = new URL(`${this.baseUrl}/${endpoint}`);

    if (searchParams) {
      Object.entries(searchParams).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const response = await fetch(url);
    return response.json();
  }

  async post(endpoint: string, body: Record<string, string>, options?: RequestInit) {
    const url = new URL(`${this.baseUrl}/${endpoint}`);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });
    return response.json();
  }
}