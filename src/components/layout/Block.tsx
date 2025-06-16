import clsx from 'clsx'

import { HoveringText } from '@/components/HoveringText'
import { convertNewlineToJSX } from '@/utils/jsx'

interface BlockProps {
  description?: React.ReactNode
  list?: { indent?: 1 | 2; text: React.ReactNode }[]
  title?: React.ReactNode
}

export const Block = ({ title, description, list }: BlockProps) => {
  return (
    <div className="flex flex-col gap-[1.391vw]">
      {title && <HoveringText className="text-[0.95em] font-semibold">{title}</HoveringText>}

      {description && (
        <HoveringText className="text-neutralMuted text-[0.7em]">
          {typeof description === 'string' ? convertNewlineToJSX(description) : description}
        </HoveringText>
      )}

      {list && list.length > 0 && (
        <div className="text-neutralMuted flex flex-col gap-[0.287vw] text-[0.6em] font-normal">
          {list.map(({ text, indent = 1 }) => (
            <HoveringText key={text?.toString()}>
              <span
                className={clsx(
                  'inline-block min-w-2 text-center',
                  indent === 1 ? 'mx-[0.695vw]' : 'mr-[0.695vw] ml-[2.782vw]'
                )}
              >
                {indent === 1 ? '•' : '⸰'}
              </span>{' '}
              {text}
            </HoveringText>
          ))}
        </div>
      )}
    </div>
  )
}
