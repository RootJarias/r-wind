import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  home: setHelmet('Home', [
    {
      name: 'description',
      content: 'This is a sample Home meta',
    },
  ]),
  about: setHelmet('About Us', [
    {
      name: 'description',
      content: 'This is a sample About meta',
    },
  ]),
};

function setHelmet(title, metaList) {
  const appName = 'R-Wind';

  let helmet = (
    <HelmetProvider>
      <Helmet>
        <title>
          {appName} - {title}
        </title>
        {metaList.map((meta, i) => {
          return <meta name={meta.name} content={meta.content} key={i} />;
        })}
      </Helmet>
    </HelmetProvider>
  );

  return helmet;
}

export default meta;
