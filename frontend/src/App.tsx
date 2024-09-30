import '@mantine/core/styles.css';

import { MantineProvider, Button } from '@mantine/core';

export default function App() {
  const a = {
    h: 'a',
    b: 'c',
  }

  console.log(a)

  return <MantineProvider>
    <Button>Hello</Button>
  </MantineProvider>;
}