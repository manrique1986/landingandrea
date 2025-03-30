

import React from "react";



const TestimonialsSection = () => {

    const posts = [
        {
            
            desc: "Andrea fue clave para dar vida a la precensia digital de mi negocio. No solo creo nuestras redes sociales desde cero, si no que tambien diseño nuestra pagina web y gestiono las redes duranrte un tiempo. Siempre atenta a cada detalle, nos ayudo a construir una comunidad y a mostrar nuestros productos de manera profesional. ¡Muy agradecida por su trabajo y compromiso",
            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            authorName: "Silvia Daniele",
            date: "Dueña de Hohar & Aromas",
            href: "javascript:void(0)"
        },
        {
           
            desc: "El mundo de la arquitectura y la construccion no es facil en redes, pero Andrea ha sabido entender nuestro rubro a la perfeccion. Creo nuestras redes sociales desde cero y hoy sigue gestionandolas con estrategias claras y efectivas. Ademmas, recientemente iniciamos campañas en meta Adccon excelentes resultados: Conseguimos reuniones, presupuestos y estamos a punto de cerrar nuevos clientes. Es una persona cercana, que siempre escucha y esta pendiente de nuestras necesidades. ¡Totalmente recomendable!",
            img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
            authorName: "Roberto Pavlik",
            date: "Dueño de Ar - Arquitectura y construcción",
            href: "javascript:void(0)"
        },
        {
      
            desc: "Trabajar con Andrea ha sido una linda experiencia. Nos gestiona las redes sociales y Linkedin Empresas. Siempre abierta a cambios, escucha nuestras idea y esta disponoible cuando la necesitamos. Ahora estamos por dar el siguiente paso con campañas en Meta y Google Ads, y confiamos plenamente en su trabajo. ¡Muy contentos con su acompañamiento!",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
            authorName: "Roberto Grau",
            date: "Dueño de Vendnet",
            href: "javascript:void(0)"
        },
       
    ]
  return (
    <section className="bg-[#600f6d] py-16">
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="sm:text-4xl text-3xl font-bold mb-8 text-white dark:text-white">
        PERSONAS NOS MANDARON MENSAJES...
        </h2>

      
      </div>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">

            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border-[] rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                               
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-[#cf27e9]">{items.authorName}</span>
                                        <span className="block dark:text-white text-white text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
  
    </section>
  );
};

export default TestimonialsSection;