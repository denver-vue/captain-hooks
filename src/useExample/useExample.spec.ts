import test from 'ava';

import { useExample } from '.';

test('useExample', (t) => {
  const example = useExample();
  t.is(example.value, 'example');
});
