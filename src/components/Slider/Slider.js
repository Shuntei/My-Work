import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper';
import './Slider.css'
import 'swiper/swiper-bundle.min.css';

const Slider = () => {

    const img = [
        {url: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1906&q=80'},
        {url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1794&q=80'},
        {url: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'}
    ]
  return (
    <div className="swiper">
      <Swiper className="swiper-item"
        modules={[Pagination,Navigation,Scrollbar]}  
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {img.map((slide) => (
          <SwiperSlide key={slide.url}>
            <img src={slide.url} alt={slide.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )

}

export default Slider