import { useCallback, useEffect, useState } from 'react'

export const useModal = (initialOpen: boolean) => {
  const [isOpened, setIsOpened] = useState(initialOpen)

  useEffect(() => () => document.body.classList.remove('locked'), [])

  const onModalOpen = useCallback(() => {
    setIsOpened(true)
    document.body.classList.add('locked')
  }, [])

  const onModalClose = useCallback(() => {
    setIsOpened(false)
    document.body.classList.remove('locked')
  }, [])

  return { isOpened, onModalOpen, onModalClose }
}
