import { HoveringText } from '@/components/HoveringText'
import { convertNewlineToJSX } from '@/utils/jsx'

interface BlockProps {
  description?: string
  list?: string[]
  title?: string
}

export const Block = ({ title, description, list }: BlockProps) => {
  return (
    <div className="flex flex-col gap-[1.391vw]">
      {title && <HoveringText className="text-[0.95em] font-semibold">{title}</HoveringText>}

      {description && (
        <HoveringText className="text-neutralMuted text-[0.7em]">
          {convertNewlineToJSX(description)}
        </HoveringText>
      )}

      {list && list.length > 0 && (
        <div className="text-neutralMuted flex flex-col gap-[0.287vw] text-[0.6em] font-normal">
          {list.map((item) => (
            <HoveringText key={item}>
              <span className="mx-4">•</span> {item}
            </HoveringText>
          ))}
        </div>
      )}
    </div>
  )
}
