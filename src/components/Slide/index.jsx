import React from 'react'
import styles from './Slide.module.css'

function Slide({ titulo, subtitulo, descricao, img }) {
  return (
    <>
      <div className={styles.header}>
        <h1>{titulo}</h1>
        <h3>{subtitulo}</h3>
      </div>
      <div className={styles.slide__container}>
        <p className={styles.descricao}>{descricao}</p>
        <img src={img} alt={titulo} className={styles.imagem} />
      </div>
    </>
  )
}

export default Slide