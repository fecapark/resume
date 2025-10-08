import { FaGithub } from 'react-icons/fa'
import { MdInfo, MdMail } from 'react-icons/md'
import { SiVelog } from 'react-icons/si'

import { config } from '@/components/config'
import { HoveringText } from '@/components/HoveringText'
import { IconLink } from '@/components/IconLink'
import { TextLink } from '@/components/TextLink'
import { useHoverTextSubArea } from '@/hooks/useHoverTextSubArea'
import { vars } from '@/styles/__generated__/color.gen'

export const Introduction = () => {
  const { hoverTargetKey, onHoveringComplete } = useHoverTextSubArea<HTMLDivElement>()

  return (
    <div className="flex flex-col gap-[1.778vw]">
      {config.printMode && (
        <>
          {!config.siteMode && (
            <div className="bg-grey200 mb-[3vw] flex items-center gap-[0.6em] rounded-[0.5em] px-[1.2em] py-[1.2em] text-[0.8em] leading-[1.2] font-semibold">
              <MdInfo className="size-[1.25em] leading-0" />
              <div>
                웹사이트에서도 볼 수 있습니다.{' '}
                <TextLink
                  className="ml-[0.3em]"
                  href="https://fecapark-resume.vercel.app/"
                  openInNewTab
                >
                  링크
                </TextLink>
              </div>
            </div>
          )}
          <img className="w-[10vw]" src={'/thumbnails/me.jpeg'} />
        </>
      )}
      <HoveringText className="text-[1.75em] font-semibold" onHoveringComplete={onHoveringComplete}>
        처음뵙겠습니다,
        <br />
        개발자{' '}
        {config.printMode ? (
          <span className="text-blue500">박상혁</span>
        ) : (
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
        )}
        입니다.
      </HoveringText>

      <HoveringText className="mb-[2vw]">
        <span className="text-grey500 flex">
          <IconLink className="mr-[0.15em]" href="https://github.com/fecapark" openInNewTab>
            <FaGithub className="size-[0.9em]" />
          </IconLink>
          <IconLink className="mr-[0.15em]" href="https://velog.io/@fecapark" openInNewTab>
            <SiVelog className="size-[0.9em]" />
          </IconLink>
          <IconLink className="mr-[0.15em]" href="mailto:fecapark@gmail.com" openInNewTab>
            <MdMail className="size-[0.9em] scale-130" />
          </IconLink>
        </span>
      </HoveringText>

      <div className="leading-[1.55]">
        <HoveringText>같은 것을 만들어도 다른 느낌을 주는 것을 목표로 합니다.</HoveringText>
        <HoveringText className="text-grey500 mt-[0.3em] text-[0.9em]">
          사소한 디테일에 집착하려하고, 이것이 모여 사용자 경험에 큰 영향을 준다고 믿습니다.
        </HoveringText>
        <br />
        <HoveringText>혼자서 읽기 쉬운 코드를 피하려 노력합니다.</HoveringText>
        <HoveringText className="text-grey500 mt-[0.3em] text-[0.9em]">
          동료 또한 쉽게 읽을 수 있는 코드를 작성하기 위해, 많은 의견을 나누고 더 나은 방식을
          고민합니다.
        </HoveringText>
        <HoveringText className="text-grey500 mt-[0.3em] text-[0.9em]" />
        <br />
        <HoveringText>
          어떤 문제를 발견하고, 기술적으로 해결하여, 현실에 주는 영향으로 이끌어내는 것을
          좋아합니다.
        </HoveringText>
      </div>
    </div>
  )
}
