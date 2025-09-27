import { publicProcedure } from '@payload/orpc/procedures/public.procedure'
import { getPayload } from '@payload/utils/payload/getPayload.util'
import { socialSchema } from '@repo/models'

export const getSettingsSocials = publicProcedure.settings.getSettingsSocials
  .handler(async ({
    context,
  }) => {
    const payload = await getPayload()

    const settings = await payload.findGlobal({
      fallbackLocale: false,
      locale: context.locale,
      slug: 'settings',
    })
    const parsedSocials = settings.socials?.socials?.map((social) => socialSchema.parse(social.social))

    return parsedSocials ?? []
  })
