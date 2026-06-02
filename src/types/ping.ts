export interface PingRequest {
  message: string
}

export interface PingResponse {
  echo: string
  env: string
  timestamp: number
  version: string
}
