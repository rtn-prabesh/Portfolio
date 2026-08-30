"use client"

import * as React from "react"

export function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [loopNum, setLoopNum] = React.useState(0)
  const [typingSpeed, setTypingSpeed] = React.useState(100)

  React.useEffect(() => {
    let timer: NodeJS.Timeout

    const handleTyping = () => {
      const i = loopNum % words.length
      const fullText = words[i]

      setText((current) => 
        isDeleting ? fullText.substring(0, current.length - 1) : fullText.substring(0, current.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 100)

      if (!isDeleting && text === fullText) {
        // Wait before starting to delete
        timer = setTimeout(() => setIsDeleting(true), 1500)
        return
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        // Wait a little before starting to type next word
        timer = setTimeout(() => {}, 500)
        return
      }

      timer = setTimeout(handleTyping, typingSpeed)
    }

    timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, words, typingSpeed])

  return (
    <span>
      {text}
      <span className="animate-[pulse_1s_infinite] text-primary">|</span>
    </span>
  )
}
