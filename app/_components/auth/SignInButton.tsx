'use client'

import { HiOutlineMail } from 'react-icons/hi'
import Link from 'next/link'

const SignInBtn = () => {

  return (
    <div className="flex flex-col border-black border-4 rounded-xl p-10 gap-10">
      <Link
        href={'/auth/email'}
        className="text-2xl font-bold border-black border-2 rounded-xl p-5 hover:bg-black hover:text-white transition-all duration-200 text-center"
      >
        <HiOutlineMail className="inline-block mr-3" />
        メールアドレスでサインイン
      </Link>
    </div>
  )
}

export default SignInBtn