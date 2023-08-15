import { SelectedPage } from '@/shared/types'
import React from 'react'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export default function ContactUs({setSelectedPage}: Props) {
  return (
    <div id={`#${SelectedPage.ContactUs}`}>ContactUs</div>
  )
}