export interface ServerError {
  message: string
  field?: string
  rule?: string
}

export interface ServerErrorResponse {
  errors: ServerError[]
}
