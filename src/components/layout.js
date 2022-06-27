import Header from './Header/Header/header';
export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
}