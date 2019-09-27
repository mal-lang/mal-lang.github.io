import React from "react";

const links = [
  {
    link: 'https://github.com/mal-lang/mal-documentation/wiki',
    name: 'Wiki',
  },
  {
    link: 'https://github.com/mal-lang/malcompiler',
    name: 'malcompiler repo',
  },
  {
    link: 'https://github.com/mal-lang/exampleLang',
    name: 'exampleLang repo',
  }
]

const LinkItem = ({ name, link }) => (
  <li>
    <span>
      {`${name}: `}
      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
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
