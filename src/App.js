import { Swiper, SwiperSlide } from 'swiper/react'
import infos from './jsons/infos.json'
import styles from './styles.css';
import Slide from './components/Slide';
import 'swiper/css'

function App() {
  return (
    <div className={styles.container}>
      <Swiper>
        {infos.map(item => 
          (
            <SwiperSlide className={styles.swiper}>
              <Slide titulo={item.titulo} subtitulo={item.subtitulo} descricao={item.descricao} img={item.img}/>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default App;
