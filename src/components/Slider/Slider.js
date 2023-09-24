// import react from "react"; 
// import { Swiper, SwiperSlide } from 'swiper/react'; 
// import './Slider.css'; 

// import {Pagination,Navigation,Scrollbar} from "swiper";

// import 'swiper/css/pagination'; 
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

// const Slider = () => { 
//     const img = [
//         {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyCq6PGDTHZS7ycv71p-JMFPf-ZoC26kdPw&usqp=CAU'},
//         {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyCq6PGDTHZS7ycv71p-JMFPf-ZoC26kdPw&usqp=CAU'},
//         {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyCq6PGDTHZS7ycv71p-JMFPf-ZoC26kdPw&usqp=CAU'}
//     ]
//     return ( 
//         <Swiper
//             modules={[Pagination,Navigation,Scrollbar]}  // 引入module 
//             spaceBetween={50} //Slide之間的距離 
//             slidesPerView={1}  //一頁顯示幾個slide 
//             navigation //左右箭頭導航 
//             pagination={{ clickable: true }}  //頁數 
//             scrollbar={{ draggable: true }} //滾動條
//             onSlideChange={() => console.log('slide change')} 
//             onSwiper={(swiper) => console.log(swiper)} 
//             className="flex flex-col justify-center w-6/12" 
//         > 
//                 {img.map((item)=>(
//                     <SwiperSlide key={item.url}>
//                         <img src={item.url} alt={item.url} />
//                     </SwiperSlide>
//                 ))}
//             {/* <SwiperSlide><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyCq6PGDTHZS7ycv71p-JMFPf-ZoC26kdPw&usqp=CAU'}></img></SwiperSlide> 
//             <SwiperSlide><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyCq6PGDTHZS7ycv71p-JMFPf-ZoC26kdPw&usqp=CAU'}></img></SwiperSlide>
//             <SwiperSlide><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyCq6PGDTHZS7ycv71p-JMFPf-ZoC26kdPw&usqp=CAU'}></img></SwiperSlide> */}
//         </Swiper> 
//     ); 
// };

// export default Slider;


import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
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
      //   modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        modules={[Pagination,Navigation,Scrollbar]}  // 引入module 
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      //   effect={"cube"}
      //   cubeEffect={{
      //     shadow: true,
      //     slideShadows: true,
      //     shadowOffset: 20,
      //     shadowScale: 0.94,
      //   }}
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