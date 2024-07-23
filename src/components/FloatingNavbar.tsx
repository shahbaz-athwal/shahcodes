import MenuBar from "./MenuBar"

function FloatingNavbar() {
  return (
    <div className="mx-auto rounded-2xl py-2 px-2 sm:px-4 w-fit place-content-center shadow-surface-glass backdrop-blur [@supports(backdrop-filter:blur(0px))]:bg-black/[6%] dark:[@supports(backdrop-filter:blur(0px))]:bg-white/[3%]">
      <MenuBar />
    </div>
  )
}

export default FloatingNavbar