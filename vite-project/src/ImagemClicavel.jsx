import React from 'react';
import './ImagemClicavel.css';

const ImagemClicavel = ({ imagem, descricao, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imagem} alt={descricao} 
      className='imagem-clicavel'/>
    </a>
  );
};

export default ImagemClicavel;
