import type {
  DefaultError,
  QueryClient,
  QueryKey,
  UseQueryDefinedReturnType,
  UseQueryOptions,
  UseQueryReturnType,
} from '@tanstack/vue-query'
import { useQuery } from '@tanstack/vue-query'

export function useClientOnlyQuery<
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
  >,
  queryClient?: QueryClient,
):
  | UseQueryDefinedReturnType<TData, TError>
  | UseQueryReturnType<TData, TError> {
  const optionsValue = toValue(options)
  // @ts-expect-error TODO fix this
  const optionsEnabled = computed<boolean>(() => toValue(optionsValue.enabled) ?? true)
  const isMounted = ref<boolean>(false)

  onMounted(() => {
    isMounted.value = true
  })

  return useQuery({
    ...optionsValue,
    enabled: computed<boolean>(() => isMounted.value && optionsEnabled.value),
  }, queryClient)
}
