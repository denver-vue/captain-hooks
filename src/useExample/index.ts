import { ref, Ref } from 'vue';

/**
 * Returns an example ref.
 *
 * ### Example
 * ```js
 * import { useExample } from '@denver-vue/captain-hooks';
 *
 * const example = useExample();
 *
 * console.log(example.value); // example
 * ```
 *
 * @returns Ref<string>
 */
export const useExample = (): Ref<string> => {
  const example = ref('example');
  return example;
};
