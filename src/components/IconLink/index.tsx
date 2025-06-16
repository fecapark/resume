import clsx from 'clsx'

export const IconLink = ({
  className,
  children,
  openInNewTab,
  rel,
  target,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { openInNewTab?: boolean }) => {
  return (
    <a
      className={clsx(
        'hover:text-neutral hover:bg-grey100 ease-ease block cursor-pointer rounded-[0.2em] p-[0.2em] leading-0 transition-colors duration-300',
        className
      )}
      rel={openInNewTab ? 'noreferrer noopener' : rel}
      target={openInNewTab ? '_blank' : target}
      {...props}
    >
      {children}
    </a>
  )
}
