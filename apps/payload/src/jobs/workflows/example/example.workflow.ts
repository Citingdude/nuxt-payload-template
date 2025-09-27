/* eslint-disable no-console */
import type { WorkflowConfig } from 'payload'

export const exampleWorkflow: WorkflowConfig<'exampleWorkflow'> = {
  handler: async ({ job, tasks }) => {
    const output = await tasks.exampleTask('1', { input: { title: job.input.title } })

    console.log('workflow output', output)
  },
  inputSchema: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
  ],
  interfaceName: 'ExampleWorkflow',
  slug: 'exampleWorkflow',
}
