import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Switch, Route } from "react-router-dom"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
