import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  
  // Lógica de fetching...
  useEffect(() => {
    // ... (Tu lógica de fetching se mantiene sin cambios)
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
      } catch (error) {
        console.log(error);
      }
    }
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
      } catch (error) {
        console.log(error);
      }
    }
    const fetchSalesListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOfferListings();
    fetchRentListings();
    fetchSalesListings();
  }, []);

  return (
    <div>
      {/* Sección Superior (Hero) */}
      <div className='flex flex-col gap-5 py-12 px-4 md:py-20 md:px-6 lg:py-28 xl:py-36 max-w-7xl 2xl:max-w-[1400px] mx-auto'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight'>
          Encuentra tu próximo <span className='text-blue-600 dark:text-blue-400'>Hogar</span>
          <br />
          de manera sencilla
        </h1>
        <div className='text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-3xl'>
          **ResidenceRadar** es la herramienta que necesitas para hallar la propiedad perfecta. 
          <br className='sm:hidden' /> Tenemos el lugar que siempre soñaste, a tu alcance.
        </div>
        <Link 
          to={'/search'} 
          className='text-lg font-bold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors duration-300 w-fit border-b-2 border-blue-700 hover:border-blue-900 dark:border-blue-400 dark:hover:border-blue-200'
        >
          ¡Comencemos la búsqueda! &rarr;
        </Link>
      </div>

      <hr className="my-4 border-gray-200 dark:border-gray-700" />
      
      {/* Swiper (Imágenes Destacadas) */}
      <Swiper navigation className='mb-16'>
        {
          offerListings && offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div 
                  className='h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] 2xl:h-[800px] w-full' 
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`, 
                    backgroundSize:'cover'
                  }}
                >
                </div>
              </SwiperSlide>
            ))
        }
      </Swiper>

      <hr className="my-4 border-gray-200 dark:border-gray-700" />

      {/* Listados de Propiedades */}
      <div className='max-w-7xl 2xl:max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-12 my-10'>
          
        {/* Bloque: Ofertas */}
        {offerListings && offerListings.length > 0 && (
          <SectionBlock 
            title="Ofertas Recientes" 
            linkTo='/search?offer=true' 
            linkText='Ver todas las ofertas'
            listings={offerListings}
          />
        )}
        
        {/* Bloque: Alquiler */}
        {rentListings && rentListings.length > 0 && (
          <SectionBlock 
            title="Lugares Recientes en Alquiler" 
            linkTo='/search?type=rent' 
            linkText='Ver todos los alquileres'
            listings={rentListings}
          />
        )}
        
        {/* Bloque: Venta */}
        {saleListings && saleListings.length > 0 && (
          <SectionBlock 
            title="Lugares Recientes en Venta" 
            linkTo='/search?type=sale' 
            linkText='Ver todas las ventas'
            listings={saleListings}
          />
        )}
      </div>
    </div>
  );
}

// ** Nuevo Componente Auxiliar para Reutilización y Limpieza del JSX **
const SectionBlock = ({ title, linkTo, linkText, listings }) => (
    <div className='group'> {/* Agregado 'group' para efectos hover coordinados */}
        {/* Encabezado de Sección */}
        <div className='mb-4 md:mb-6 flex justify-between items-end'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200'>
                {title}
            </h2>
            <Link 
                to={linkTo}
                className='text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200'
            >
                {linkText} &rarr;
            </Link>
        </div>
        
        {/* Contenedor de Listados: Responsividad de Grilla */}
        <div className='grid gap-4 sm:gap-6 md:gap-8 
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                listings.map((listing) => (
                    // Asegúrate que ListingItem tiene un hover effect moderno
                    <ListingItem key={listing._id} listing={listing}/> 
                ))
            }
        </div>
    </div>
);