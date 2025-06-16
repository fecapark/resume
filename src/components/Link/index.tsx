import clsx from 'clsx'

export const Link = ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a className={clsx('text-blue500 cursor-pointer hover:underline', className)} {...props} />
}
