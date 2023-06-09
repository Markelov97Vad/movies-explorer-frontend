import './ResourceLink.css'

function ResourceLink({ text, href, place }) {
  return ( 
    <a className={`resource-link resource-link_place_${place}`} href={href} target="_blank" rel='noreferrer'>{text}</a>
   );
}

export default ResourceLink;