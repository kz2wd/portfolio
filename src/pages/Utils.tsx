
export function ExternalResource({link, name, isFull} : {link: string, name: string, isFull: boolean}) {
  return (
    <>
      <a href={link} target="_blank" className={`blockline-container ${isFull ? "btn-full" : "btn"}`}>{name}<img src="/logos/open_in_new.svg" className="logo-pad-1"/></a>
    </>
  )
}
