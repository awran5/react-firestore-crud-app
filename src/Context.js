import React, { createContext } from "react"
import firebase, { App, Firestore } from "./Firebase"

export const AppContext = createContext()

const cloudRef = ref => Firestore.collection(ref)

export default function ContextProvider({ children }) {
  return <AppContext.Provider value={{ firebase, App, cloudRef }}>{children}</AppContext.Provider>
}
