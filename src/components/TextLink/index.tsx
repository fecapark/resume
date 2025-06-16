import clsx from 'clsx'

export const TextLink = ({
  className,
  children,
  openInNewTab,
  rel,
  target,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { openInNewTab?: boolean }) => {
  return (
    <a
      className={clsx('text-blue500 cursor-pointer hover:underline', className)}
      rel={openInNewTab ? 'noreferrer noopener' : rel}
      target={openInNewTab ? '_blank' : target}
      {...props}
    >
      {children}
    </a>
  )
}
