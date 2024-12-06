import gsap from 'gsap'
import Image from 'next/image'
import { useEffect } from 'react'

const Loader = () => {
  useEffect(() => {
    gsap.set('.img', { y: 500 })
    gsap.set('.loader-imgs', { x: 500 })
    gsap.set('.nav-item', { y: 25, opacity: 0 })
    gsap.set('h1, .item, footer', { y: 200 })

    const tl = gsap.timeline({ delay: 1 })

    tl.to('.img', {
      y: 0,
      duration: 1.5,
      stagger: 0.5,
      ease: 'power3.inOut',
    })
      .to('.loader-imgs', { x: 0, duration: 3, ease: 'power3.inOut' }, '-=2.5')
      .to(
        '.img:not(#loader-logo)',
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1,
          stagger: 0.1,
          ease: 'power3.inOut',
        },
        '-=1',
      )
      .to(
        '.loader',
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1,
          ease: 'power3.inOut',
        },
        '-=0.5',
      )
      .to(
        '.nav-item, h1, footer, item',
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: 'power3.inOut',
        },
        '-=0.5',
      )
  }, [])

  return (
    <div className="container">
      <div className="loader pointer-events-none fixed h-screen w-screen bg-black [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
        <div className="loader-imgs width-[150%] absolute top-1/2 left-1/2 flex transform-[translate(-50%,-50%)] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
          <div
            className="img relative flex-1 [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"
            id="loader-logo"
          >
            <Image
              src="/images/logo-site.svg"
              height={200}
              width={200}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
