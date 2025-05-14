<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Prehistoria'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Entre cavernas, ambientes naturales caracterizados por seres gigantes vivos (algunos extintos actualmente), una protección de las amenazas del medio agreste en donde la alimentación, la búsqueda de recursos y una forma de organización social que demuestran la importancia de la sobrevivencia, destaca una época que se denomina Prehistoria.
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta época comienza con la aparición de los primeros ancestros humanos (Homo Sapiens, denominación de la especie humana), aproximadamente hace 5.000 años. Con herramientas para diversos usos cotidianos, la agrupación humana como parte de la sobrevivencia, la generación de asentamientos asociados a la disponibilidad de recursos y el paso de una vida nómada a los asentamientos locales, promovidos por las primeras prácticas de agricultura. 
        p Como esta época está asociada a cientos de años, hasta que se dio la invención de la escritura, es necesario comprenderlo a través de etapas. En su estudio, ha sido clave el hallazgo y análisis de registros arqueológicos y fósiles, que además de permitir la comprensión de las primeras sociedades humanas, también son patrimonio de conservación:
    
    .bg-full-width.bg-color-7
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Edad de Piedra
                p.mb-0 Período que se caracteriza por el uso de herramientas de piedra, el desarrollo de la agricultura y la ganadería.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Edad de los Metales
                p.mb-0 Incluye el uso de metales (cobre, bronce y hierro) en la fabricación de herramientas y armas.
         


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Recursos para explorar la prehistoria
    
    p.mb-4 A continuación, lo invitamos a visitar varios recursos para explorar la prehistoria:

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Recursos para explorar la prehistoria
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-2.text-center Recurso
            th.bg-color-2.text-center Descripción
            th.bg-color-2.text-center Enlace
        tbody
          tr
            td Museo de Historia Natural de Londres (Reino Unido)
            td El Museo de Historia Natural de Londres, es uno de los más emblemáticos del mundo. Es un lugar de investigación, formación y preservación más importante de la historia natural y cultural, a nivel mundial.
            td
              .row.p-3
                .col-lg-auto
                  a.anexo.mb-4.mb-lg-0(href="https://artsandculture.google.com/partner/natural-history-museum" target="_blank")
                    .anexo__icono.bg-color-8
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 <b>Sito web.</b> artsandculture 
              .row.p-3
                .col-lg-auto
                  a.anexo.mb-4.mb-lg-0(href="https://tourlondres.com/visita-virtual-por-el-museo-britanico/ " target="_blank")
                    .anexo__icono.bg-color-8
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 <b>Sito web.</b> tourlondres
          tr
            td Museo de La Plata (Argentina)
            td 20 salas que representan la evolución de la naturaleza, desde la formación del universo y el planeta Tierra, hasta el origen del ser humano y sus culturas, pasando por los sucesos del pasado y sus testimonios fósiles, y la biodiversidad de seres que habitan en ecosistemas actuales.
            td 
              .row.p-3
                .col-lg-auto
                  a.anexo.mb-4.mb-lg-0(href="https://museovirtual.unlp.edu.ar/#/menu " target="_blank")
                    .anexo__icono.bg-color-8
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 <b>Sito web.</b> museovirtual
          tr
            td Instituto Colombiano de Antropología e Historia - ICANH (Colombia)
            td Recursos tipo publicaciones, artículos, eventos, ciclos de formación, destinados para conocer y preservar la Arqueología en el territorio colombiano.
            td 
              .row.p-3
                .col-lg-auto
                  a.anexo.mb-4.mb-lg-0(href="https://www.icanh.gov.co/areas-misionales/arqueologia" target="_blank")
                    .anexo__icono.bg-color-8
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 <b>Sito web.</b> icanh
    
    h2.mb-5(data-aos="fade-left") La cueva de Altamira

    .bg-full-width.bg-color-7
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-3.p-4(data-aos="fade-left")
              p.mb-0 Obra maestra del arte prehistórico del Paleolítico Superior con más de 35.000 años de antigüedad. La cueva de Altamira es un reservorio natural que preserva la pintura rupestre prehistórica. Fue declarado, por la Unesco, en el año de 1985, como Patrimonio Mundial de la Humanidad. Está localizada en el municipio español de Santillana del Mar, en la región de Cantabria.
        .row.justify-content-center
          .col-lg-9
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 ENIGMAS DEL MUNDO - Las Pinturas Rupestres de Altamira
                      p.mb-0 Para conocer más sobre el hallazgo y sus aportes al conocimiento de la prehistoria, lo invitamos a ver el siguiente recurso.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=KUDPagFLFiI" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.semana.com/arte/articulo/representaciones-milenarias-y-arte-rupestre-serrania-chiribiquete-la-lindosa-fernando-urbina/69938/ " target="_blank" rel="noopener noreferrer") REVISTA SEMANA. (2018). ¿De qué se tratan las representaciones milenarias del Chiribiquete y la Lindosa?
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://egiptologia.com/category/videos-sobre-el-antiguo-egipto/paseos-virtuales/" target="_blank" rel="noopener noreferrer") AMIGOS DE LA EGIPTOLOGÍA. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://concepto.de/arte-prehistorico/ " target="_blank" rel="noopener noreferrer") CONCEPTO. (S/A). Arte prehistórico. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.flyoverzone.com/virtual-museum/" target="_blank" rel="noopener noreferrer") FLYOVERZONE. Virtual Museum Explore our collection. (S/A) 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://artsandculture.google.com/partner/natural-history-museum" target="_blank" rel="noopener noreferrer") GOOGLE ARTS AND CULTURE. MUSEO DE HISTORIA NATURAL DE LONDRES.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://museovirtual.unlp.edu.ar/#/menu" target="_blank" rel="noopener noreferrer") MUSEO DE LA PLATA. Argentina. Visita Virtual
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.icanh.gov.co/areas-misionales/arqueologia" target="_blank" rel="noopener noreferrer") REPÚBLICA DE COLOMBIA. Instituto Colombiano de Antropología e Historia - ICANH. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://tourlondres.com/visita-virtual-por-el-museo-britanico/" target="_blank" rel="noopener noreferrer") TOUR LONDRES. Visita virtual por el Museo Británico. 

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=HaRwYFURyaY " target="_blank" rel="noopener noreferrer") KANSKAI PRODUCCIONES. (2020, 15 de enero) Tutankamon, la tumba y sus tesoros. [Vídeo] YouTube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=KUDPagFLFiI" target="_blank" rel="noopener noreferrer") RAÚLVZ. (2020, 10 de febrero). Enigmas del Mundo. Las Pinturas Rupestres de Altamira.  [Vídeo] YouTube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=FotnjQghImg" target="_blank" rel="noopener noreferrer") MUNDO EPICURIO. (2024, 10 de abril). "Misterios de la Antigua Grecia: Mitos y Realidad - 10 Curiosidades Fascinantes". [Vídeo] YouTube 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
