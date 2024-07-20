'use client'
import { currentlyPlaying } from "@/app/actions/currentlyPlaying"


import { useEffect } from "react"

function Page() {
  useEffect(() => {
 currentlyPlaying().then((data)=> console.log(data))
  
  }, [])
  
  return (
    <div>Page</div>
  )
}

export default Page