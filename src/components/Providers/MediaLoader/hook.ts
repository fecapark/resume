type ResolverType = (v: PromiseLike<string> | string) => void

export const useLoadMediaWithProgress = () => {
  const load = ({
    onProgressChange,
    src,
  }: {
    onProgressChange: (v: number) => void
    src: string
  }) => {
    // load를 여러번 호출할 수 있으므로 ref를 사용하지 않아요.
    let resolveFn: ResolverType | undefined = undefined

    const xmlReq = new XMLHttpRequest()
    xmlReq.open('GET', src, true)
    xmlReq.responseType = 'arraybuffer'

    xmlReq.onloadstart = () => {
      onProgressChange(0)
    }

    xmlReq.onprogress = (e) => {
      const progress = e.total !== 0 ? e.loaded / e.total : 0
      onProgressChange(Math.min(Math.max(progress, 0), 1))
    }

    xmlReq.onload = () => {
      onProgressChange(1)

      const blob = new Blob([xmlReq.response])
      const videoUrl = window.URL.createObjectURL(blob)

      if (resolveFn) {
        resolveFn(videoUrl)
        resolveFn = undefined
      }
    }

    return new Promise<string>((resolve) => {
      resolveFn = resolve
      xmlReq.send()
    })
  }

  return load
}
