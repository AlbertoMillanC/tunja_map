declare module 'swr' {
  import { KeyedMutator } from 'swr/_internal'
  import { ReactNode } from 'react'

  export interface SWRConfiguration {
    refreshInterval?: number
    revalidateOnFocus?: boolean
    revalidateOnReconnect?: boolean
    dedupingInterval?: number
    shouldRetryOnError?: boolean
    errorRetryCount?: number
    suspense?: boolean
  }

  export interface SWRResponse<Data = any, Error = any> {
    data?: Data
    error?: Error
    mutate: KeyedMutator<Data>
    isValidating: boolean
    isLoading: boolean
  }

  export default function useSWR<Data = any, Error = any>(
    key: string | null,
    fetcher?: (url: string) => Promise<Data>,
    config?: SWRConfiguration
  ): SWRResponse<Data, Error>

  export function SWRConfig({ children, value }: { children: ReactNode; value?: SWRConfiguration }): JSX.Element
} 