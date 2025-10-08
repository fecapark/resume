import clsx from 'clsx'

import { config } from '@/components/config'
import { HoveringText } from '@/components/HoveringText'
import { HoveringThumbnail } from '@/components/HoveringThumbnail'

interface ArticleProps {
  content?: React.ReactNode
  descriptions?: React.ReactNode[]
  lowContainerMargin?: boolean
  lowContentMargin?: boolean
  title: string
  titleThumbnailSrc?: string
}

export const Article = ({
  title,
  descriptions,
  children,
  content,
  titleThumbnailSrc,
  lowContentMargin = false,
  lowContainerMargin = false,
}: React.PropsWithChildren<ArticleProps>) => {
  return (
    <div className={clsx('pl-[3.13vw]', lowContainerMargin ? 'mb-[2.4vw]' : 'mb-[4.8vw]')}>
      <div className="flex items-baseline gap-[1.391vw]">
        <HoveringText className="mb-[1.3vw] text-[1.2em] font-semibold">{title}</HoveringText>
        {titleThumbnailSrc && config.siteMode && (
          <HoveringThumbnail
            className="text-blue500 !text-[0.77em]"
            src={titleThumbnailSrc}
            thumbnailType="video"
          >
            영상보기
          </HoveringThumbnail>
        )}
      </div>

      {descriptions && descriptions.length && (
        <div
          className={clsx('text-grey500 text-[0.6em]', !content ? 'mb-[4.473vw]' : 'mb-[2.4vw]')}
        >
          {descriptions.map((description, i) => (
            <HoveringText key={i}>{description}</HoveringText>
          ))}
        </div>
      )}

      {content && (
        <HoveringText
          className={clsx(
            'text-neutralMuted text-[0.75em]',
            !lowContentMargin ? 'mb-[4.473vw]' : 'mb-[2.4vw]'
          )}
        >
          {content}
        </HoveringText>
      )}

      <div className={clsx('flex flex-col gap-[5.217vw] pl-[2.086vw]')}>{children}</div>
    </div>
  )
}
