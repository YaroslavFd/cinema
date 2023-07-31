import React from 'react'

export const useDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownBoxRef = React.useRef<HTMLDivElement>(null)

  const onToggleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (dropdownBoxRef.current && !dropdownBoxRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return { isOpen, onToggleIsOpen, dropdownBoxRef }
}
