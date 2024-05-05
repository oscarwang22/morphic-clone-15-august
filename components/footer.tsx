import React from 'react'
import Link from 'next/link'
// import { SiDiscord, SiGithub, SiTwitter } from 'react-icons/si'
// import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        ©{new Date().getFullYear()}
        {/* <span className="pl-1">txz.tech</span> */}
        <Link href="https://txz.tech" target="_blank" className="pl-1">
          txz.tech
        </Link>
        {/* <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://twitter.com/morphic_ai" target="_blank">
            <SiTwitter size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://git.new/morphic" target="_blank">
            <SiGithub size={18} />
          </Link>
        </Button> */}
      </div>
    </footer>
  )
}

export default Footer
