import React from 'react';
import ImagemClicavel from './ImagemClicavel';

const App = () => {
  return (
    <div>
      <h1>Youtube</h1>
      <ImagemClicavel 
        imagem="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" 
        descricao="Link do Youtube" 
        link="https://www.youtube.com/" 
      />
    </div>
  );
};

export default App;
