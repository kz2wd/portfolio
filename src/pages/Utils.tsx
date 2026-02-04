
export function ExternalResource({link, name} : {link: string, name: string}) {
  return (
    <>
      <a href={link} target="_blank" className="btn blockline-container">{name}<img src="/logos/open_in_new.svg" className="logo-pad-1"/></a>
    </>
  )
}
