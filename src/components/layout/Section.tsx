import { HoveringText } from '@/components/HoveringText'

interface SectionProps {
  title: string
}

export const Section = ({ title, children }: React.PropsWithChildren<SectionProps>) => {
  return (
    <section className="leading-[1.65]">
      <div className="mb-[4.8vw]">
        <HoveringText className="text-[1.5em] font-semibold">{title}</HoveringText>
      </div>
      <div className="flex flex-col gap-[4.8vw]">{children}</div>
    </section>
  )
}
