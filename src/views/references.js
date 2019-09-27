import React from "react";

const links = [
  {
    link: 'https://www.foreseeti.com',
    name: 'foreseeti homepage',
  },
  {
    link: 'https://www.foreseeti.com',
    name: 'MAL repository',
  }
]

const LinkItem = ({ name, link }) => (
  <li>
    <span>
      {`${name}: `}
      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      }
    </span>
  </li>
);


export default () => {
  return (
    <div>
      <h1>References</h1>
      <ul>
        {links.map(link =>
          <LinkItem {...link} />
        )}
      </ul>
    </div>
  );
}
