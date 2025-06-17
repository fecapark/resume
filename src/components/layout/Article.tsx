import clsx from 'clsx'

import { config } from '@/components/config'
import { HoveringText } from '@/components/HoveringText'
import { HoveringThumbnail } from '@/components/HoveringThumbnail'
import { useHoverTextSubArea } from '@/hooks/useHoverTextSubArea'

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
  const { hoverAreaRef, hoverTargetKey, onHoveringComplete } = useHoverTextSubArea<HTMLDivElement>()

  return (
    <div className={clsx('pl-[3.13vw]', lowContainerMargin ? 'mb-[2.4vw]' : 'mb-[4.8vw]')}>
      <HoveringText
        className="mb-[1.3vw] text-[1.2em] font-semibold"
        onHoveringComplete={onHoveringComplete}
        onHoveringStart={(p) => {
          const animateEl = p.containerElement?.querySelector(
            '[data-animate]'
          ) as HTMLDivElement | null
          if (!animateEl) {
            return
          }
          animateEl.style.animationDelay = '0.7s'
          animateEl.style.transform = ''
          animateEl.style.transformOrigin = ''
          animateEl.classList.add('animate-text-underline-slide')
        }}
      >
        {titleThumbnailSrc && !config.printMode ? (
          <span className="relative inline-flex flex-col" {...hoverTargetKey}>
            <span className="text-blue500">{title}</span>
            <div
              className="bg-blue500 absolute bottom-0 h-[0.26vw] w-full"
              data-animate
              style={{
                transformOrigin: 'left center',
                transform: 'scale3d(0, 1, 1)',
              }}
            />
          </span>
        ) : (
          title
        )}
      </HoveringText>

      <HoveringThumbnail ref={hoverAreaRef} src={titleThumbnailSrc} thumbnailType="video" />

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
            'text-neutralMuted text-[0.7em]',
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
