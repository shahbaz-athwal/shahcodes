import MenuBar from "./MenuBar"

function FloatingNavbar() {
  return (
    <div className="mx-auto rounded-2xl py-2 px-4 w-fit bg-gray-800/95 place-content-center shadow-surface-glass backdrop-blur [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]">
      <MenuBar />
    </div>
  )
}

export default FloatingNavbar