/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from 'next'

import config from '@payload-config'
import { generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import { NotFoundPage } from '@payload/components/not-found/NotFoundPage'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

const NotFound = ({ params, searchParams }: Args) =>
  NotFoundPage()


export default NotFound
