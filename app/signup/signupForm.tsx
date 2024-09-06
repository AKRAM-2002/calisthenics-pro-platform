"use client"

import { useRouter } from "next/router"
import { useState } from "react"

type Props = {}
const SignForm = (props: Props) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const router = useRouter()
  return (
    <div>signupForm</div>
  )
}
export default SignForm