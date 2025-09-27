import type {
  DefaultError,
  QueryClient,
  QueryKey,
  UseQueryDefinedReturnType,
  UseQueryOptions,
  UseQueryReturnType,
} from '@tanstack/vue-query'
import {
  useQuery as useTanstackQuery,
} from '@tanstack/vue-query'

import { useClientOnlyQuery } from '~base/composables/query/useClientOnlyQuery'

export function useQuery<
  TQueryFnData,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryFnData,
    TQueryKey
  > & {
    isClientOnly?: boolean
  },
  queryClient?: QueryClient,
):
  | UseQueryDefinedReturnType<TData, TError>
  | UseQueryReturnType<TData, TError> {
  if (options?.isClientOnly != null && options.isClientOnly) {
    return useClientOnlyQuery(options, queryClient)
  }

  return useTanstackQuery(options, queryClient)
}
