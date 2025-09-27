/* eslint-disable no-console */
import type { TaskConfig } from 'payload'

export const exampleTask: TaskConfig<'exampleTask'> = {
  handler: ({ input }) => {
    return {
      output: {
        title: input.title,
      },
    }
  },
  inputSchema: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
  ],
  interfaceName: 'ExampleTask',
  label: 'Example task',
  outputSchema: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
  ],
  retries: 2,
  slug: 'exampleTask',
  onFail: () => {
    console.log('Example task fail')
  },
  onSuccess: () => {
    console.log('Example task success')
  },
}
