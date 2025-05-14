<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Historia que relata historias'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La historia es una disciplina que estudia, investiga, conserva y narra acontecimientos pasados, desde el origen de la humanidad, hasta la actualidad. Aunque antes de la humanidad también hubo acontecimientos en el planeta, como la formación de los océanos, demás fuentes de agua, la formación de la capa de ozono y la aparición de la vida, estos corresponden al estudio de otras disciplinas o campos de conocimiento, correspondientes a la astronomía, geología, biología, oceanografía, entre otras disciplinas científicas. 
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A través de la investigación histórica, se busca comprender cómo se han desarrollado las sociedades, las culturas, las instituciones y los individuos, a lo largo del tiempo. Dentro de los objetivos de la historia están entender el pasado y su influencia en el presente; describir cambios sociales, políticos, económicos y culturales; fomentar habilidades críticas y analíticas en la ciudadanía; preservar el patrimonio cultural y hacer énfasis educativo para que las personas y comunidades no repitan errores del pasado o, al menos, sean conscientes de la incidencia de los episodios sobre el futuro de las comunidades, civilizaciones y naciones.
        p Para avanzar en esa descripción y análisis histórico, la historia occidental plantea la siguiente división por períodos:

    .bg-full-width.bg-color-4
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
    
            SlyderF(columnas="col-12 col-lg-6")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Prehistoria
                  p.mb-0.text-center Abarca desde la aparición de los primeros humanos, hasta la invención de la escritura.
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Edad Antigua
                  p.mb-0.text-center Desde la invención de la escritura, hasta la caída del Imperio Romano de Occidente.
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Edad Media
                  p.mb-0.text-center Comprende desde la caída del Imperio Romano de Occidente, hasta la caída de Constantinopla.
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Edad Moderna
                  p.mb-0.text-center Periodo que comienza con la caída de Constantinopla y termina con la Revolución Francesa.
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Edad Contemporánea
                  p.mb-0.text-center Comienza con la Revolución Francesa y continúa hasta el presente.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/3.png', alt='')
    
    p.mb-4 A continuación, lo invitamos a realizar la siguiente lectura:

    .bg-full-width.bg-fondo-1
      .p-3.p-lg-5
        .row.p-5
          .col-lg-1
          .col-lg-7
            h2.bg-color-5(data-aos="fade-left") La historia tiene su propia musa 
            p Clío es una de las nueve musas que, según la tradición clásica, habitan en el monte Helicón y son fuente de inspiración para artistas, poetas y escritores. Clío representa la musa de la historia, gracias a la intelectualidad académica de Alejandría. Su nombre significa “la que celebra” o “la que da fama”, lo que refleja su papel en preservar y transmitir conocimientos históricos.
            p De las nueve hijas de Zeus y Mnemosine (todas musas promotoras de las artes), Clío, es representada por la imagen de una mujer coronada de laurel con un rollo de papiro en la mano izquierda, simbolizando su función como guardiana y registradora de los hechos históricos.
            p Clío tenía la responsabilidad de inspirar a poetas, escritores e historiadores, para contar hazañas heroicas y narrar eventos importantes del pasado. Era invocada por aquellos que buscaban contar relatos épicos o escribir crónicas detalladas sobre civilizaciones antiguas.
            p Tenía una relación muy especial con la musa Urania de la astronomía y de los astros celestiales; ambas simbolizaban el conocimiento, tanto terrenal como celestial.
            p Que la historia tenga musa, refleja la importancia que desde los tiempos de Herodoto, ha tenido para el hombre; sin embargo, como las musas son protectoras de las artes, se plantea el problema acerca de si la historia es un arte, tal como creía Aristóteles, o si es un conocimiento científico.
            p Adaptado de Sánchez Jaramillo (2005).


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://concepto.de/arte-prehistorico/" target="_blank" rel="noopener noreferrer") CONCEPTO. (S/A). Arte prehistórico.

         

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
