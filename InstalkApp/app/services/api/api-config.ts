export interface ApiConfig {
  url: string
  timeout: number
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: "http://192.168.0.34:3000",
  timeout: 10000,
}
