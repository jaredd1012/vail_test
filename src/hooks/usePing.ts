import { useMutation } from '@tanstack/react-query'
import { postPing } from '../api/ping'
import type { PingResponse } from '../types/ping'

export function usePing() {
  return useMutation<PingResponse, Error, void>({
    mutationFn: () => postPing(),
  })
}
