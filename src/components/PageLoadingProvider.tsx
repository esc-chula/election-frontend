import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type PageLoadingConstruct = [number, Dispatch<SetStateAction<number>>]

const PageLoadingContext = createContext(
  ([] as unknown) as PageLoadingConstruct,
)

export function usePageLoadingContext() {
  return useContext(PageLoadingContext)
}

export default function PageLoadingProvider({
  children,
}: PropsWithChildren<unknown>) {
  const [count, setCount] = useState(0)

  return (
    <PageLoadingContext.Provider value={[count, setCount]}>
      {children}
    </PageLoadingContext.Provider>
  )
}
