import { HoveringText } from '@/components/HoveringText'
import { HoveringThumbnail } from '@/components/HoveringThumbnail'
import { useHoverTextSubArea } from '@/hooks/useHoverTextSubArea'
import { vars } from '@/styles/__generated__/color.gen'

export const Introduction = () => {
  const { hoverAreaRef, hoverTargetKey, onHoveringComplete } = useHoverTextSubArea<HTMLDivElement>()

  return (
    <div className="flex flex-col gap-[3.478vw]">
      <HoveringText className="text-[1.75em] font-semibold" onHoveringComplete={onHoveringComplete}>
        처음뵙겠습니다,
        <br />
        개발자{' '}
        <div className="relative inline-flex flex-col" {...hoverTargetKey}>
          <span
            className="animate-text-slide"
            style={{
              backgroundImage: `linear-gradient(90deg, ${vars.blue500} 50%, transparent 50%)`,
              backgroundSize: '200% 100%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            박상혁
          </span>
          <div className="bg-blue500 animate-text-underline-slide absolute bottom-0 h-[0.26vw] w-full" />
        </div>
        입니다.
      </HoveringText>

      <HoveringThumbnail ref={hoverAreaRef} src="/thumbnails/me.jpeg" thumbnailType="image" />

      <div className="leading-[1.55]">
        <HoveringText>같은 것을 만들어도 다른 느낌을 주는 것을 목표로 합니다.</HoveringText>
        <HoveringText>
          색다른 인터페이스와 인터랙션, 그리고 애니메이션을 구현하는 것을 좋아합니다. 이로써
          사용자의 자연스러운 행동 유도와 편한 사용을 이끌어내려합니다.
        </HoveringText>
        <br />
        <HoveringText>
          재밌거나 필요한 것이 있으면 빠르게 만들어보고, 새로운 가치를 만들어내도록 하는 것을
          좋아합니다.
        </HoveringText>
      </div>
    </div>
  )
}
