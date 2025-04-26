import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function Home() {
  return (
    <div className='p-4 space-y-4'>
      <div><Button variant={"elevated"}>Hello</Button></div>
      <div><Input placeholder='Enter your name'/></div>
      <div><Progress value={50} /></div>
      <div><Textarea placeholder='Enter your message' /></div>
    </div>
  )
}
