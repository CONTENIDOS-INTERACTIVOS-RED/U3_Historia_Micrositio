<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Edad Media'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0  El Imperio Romano alcanzó la cumbre en los siglos I y II d. C. Tuvo el control político y comercial en la península itálica y los territorios ibéricos, la costa norte de África, la costa de Siria y Palestina, los Balcanes, Asia menor y la Isla de Britania en el norte, así como Mesopotamia en el Este. Pero este territorio tan amplio, llevó a un debilitamiento en el siglo III y fue entonces, que empezó la caída del gran imperio; de allí inicia el período correspondiente a la Edad Media.
        p(data-aos="fade-left") Dentro de los hitos de la Edad Media, se encuentran: la caída del Imperio Romano, la Batalla de Hastings y la Carta Magna, documento inglés firmado en 1215 por el Rey Juan Sin Tierra, que corresponde a su relevancia en la historia de los derechos humanos y el constitucionalismo. Además, se caracteriza por la gran influencia de la Iglesia Católica, incluso sobre las monarquías más importantes. También se reconocen como hitos, las masivas invasiones islámicas y la Peste Negra, enfermedad bacteriana que mató a un tercio de la población europea, causando graves consecuencias sociales y económicas.
    
    .bg-full-width.bg-fondo-2.mb-5
      .p-3.p-lg-5
        .row.p-5
          .col-lg-1
          .col-lg-6
            h2.bg-color-5(data-aos="fade-left") La Peste Negra, la epidemia apocalíptica de la Edad Media 
            div.text-white
              p Aunque la humanidad contemporánea conoció la pandemia del Covid-19, que dejó cientos de fallecidos en todo el mundo y cambió la forma de asumir la vida cotidiana, trayendo nuevos hábitos, rutinas, uso extensivo de la virtualidad, en el mundo de la Edad Media, también ocurrió un hecho sin precedentes, la llamada muerte o Peste Negra. 
              p Una peste causada por un microorganismo, la bacteria Yersinia pestis, que afectaba a roedores y se transmitía a través de pulgas y otros insectos, a través del roedor y luego picaban a los humanos. Esta peste estuvo asociada a las falencias en la higiene y salubridad, dada las precarias condiciones de saneamiento público, que llevaban a que los roedores, pulgas y otras plagas, fueran comunes en los recintos, hogares, calles y por todo sitio habitable.
              p Esta peste que no pudo prevenirse, se propagó con mucha rapidez y dejó cientos de muertos, afectando todo orden social, económico, político y comercial, entre otros, de las naciones europeas.
              p Para ampliar información sobre este episodio de la humanidad, lo invitamos a revisar el siguiente artículo: 

              p National Geographic. (s.f.). La peste negra: La epidemia que hizo temblar Europa. Historia National Geographic
            .row.p-3
              .col-lg-auto
                a.anexo.mb-4.mb-lg-0(href="https://historia.nationalgeographic.com.es/a/peste-negra-epidemia-que-hizo-temblar-europa_6280" target="_blank")
                  .anexo__icono.bg-color-8
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.mb-0 <b>Sito web. </b> 
                      span La peste negra: La epidemia que hizo temblar Europa.
    
    p.mb-4 Y para explorar un poco más sobre este periodo, lo invitamos a visitar los siguientes recursos:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/4.png', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="37%" y="10%" numero="+")
                h5 Museo de Cluny en París (Francia)
                p Museo Nacional de la Edad Media, situado en el corazón de París. Destaca la época medieval, las costumbres de la gente de la Edad Media, su cultura, su forma de vida y su arte.
                p.mb-0 Enlace:
                .row.p-3
                  .col-lg-auto
                    a.anexo.mb-4.mb-lg-0(href="https://www.musee-moyenage.fr/visiter/preparer-sa-visite/le-musee-en-realite-virtuelle.html " target="_blank")
                      .anexo__icono.bg-color-8
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.mb-0 <b>Sito web. </b> History and Stories
    
              .bg-color-white.box-shadow.p-3(x="62%" y="10%" numero="+")
                h5 Período colonial
                p Galería que incluye obras relacionadas con la Edad Media.
                p.mb-0 Enlace:
                .row.p-3
                  .col-lg-auto
                    a.anexo.mb-4.mb-lg-0(href="https://blog.museunacional.cat/es/tag/red-de-museos-de-arte-medieval-de-europa/" target="_blank")
                      .anexo__icono.bg-color-8
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.mb-0 <b>Sito web. </b> musee
    
              .bg-color-white.box-shadow.p-3(x="88%" y="10%" numero="+")
                h5 Museo de Arte de Cataluña
                p.mb-0 Museo de Arte de Cataluña
                p Blog de arte de Cataluña que integra retratos, biografías, artículos y enlaces, asociados a la Edad Media europea.
                p.mb-0 Enlace:
                .row.p-3
                  .col-lg-auto
                    a.anexo.mb-4.mb-lg-0(href="https://blog.museunacional.cat/es/" target="_blank")
                      .anexo__icono.bg-color-8
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.mb-0 <b>Sito web. </b> musee


    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] El renacimiento europeo
    
    p.mb-4 Aunque no hace parte de una época de la historia, es preciso mencionar el impacto del Renacimiento del siglo XV y XVI; momento intermedio entre la Edad Media y la Edad Moderna, particularmente en la Europa occidental, refleja el impacto cultural y material de artistas y corrientes que retomaron valores y conocimientos de la cultura griega y romana. Dentro de los factores históricos que incidieron en este movimiento cultural o corriente, se encuentran: 

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/5.svg", style="max-width: 80px").mx-auto
            .col-lg
              h5.mb-2 01
              p.mb-0.text-small La caída de Constantinopla.

      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/6.svg", style="max-width: 80px").mx-auto
            .col-lg
              h5.mb-2 02
              p.mb-0.text-small Migración de sabios a las ciudades de Italia.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/7.svg", style="max-width: 80px").mx-auto
            .col-lg
              h5.mb-2 03
              p.mb-0.text-small Llegada de europeos a América (descubrimiento, conquista).

      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/8.svg", style="max-width: 80px").mx-auto
            .col-lg
              h5.mb-2 04
              p.mb-0.text-small Fortalecimiento de los estados europeos.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/9.svg", style="max-width: 80px").mx-auto
            .col-lg
              h5.mb-2 05
              p.mb-0.text-small Reforma Luterana que dividió la Iglesia Católica.

      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/10.svg", style="max-width: 80px").mx-auto
            .col-lg
              h5.mb-2 06
              p.mb-0.text-small La invención de la imprenta.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/11.svg", style="max-width: 80px").mx-auto
            .col-lg
              h5.mb-2 07
              p.mb-0.text-small El nuevo sistema financiero de Italia.

      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/12.svg", style="max-width: 80px").mx-auto
            .col-lg
              h5.mb-2 08
              p.mb-0.text-small El florecimiento del humanismo (pone al ser humano como centro y no a Dios).

    p.mb-4 En los siguientes recursos, podrá explorar más sobre el Renacimiento:

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Recursos para explorar el Renacimiento
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-2.text-center Recurso
            th.bg-color-2.text-center Descripción
            th.bg-color-2.text-center Enlace
        tbody
          tr
            td Galeria Uffizi
            td La mejor colección de obras maestras florentinas.
            td
              .row.p-3
                .col-lg-auto
                  a.anexo.mb-4.mb-lg-0(href="https://www.virtualuffizi.com/es/visita-virtual.html " target="_blank")
                    .anexo__icono.bg-color-8
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 <b>Sito web.</b> virtualuffizi 
          tr
            td Academia Florencia <em>online</em>
            td Primera escuela de Europa dedicada exclusivamente a enseñar las artes del dibujo, la pintura y la escultura. Su fundador fue Cosimo I de Médici y se llamó <em>Accademia delle Arte del Disegno.</em>
            td 
              .row.p-3
                .col-lg-auto
                  a.anexo.mb-4.mb-lg-0(href="https://www.galleriaaccademiafirenze.it/es/accademia-online/ " target="_blank")
                    .anexo__icono.bg-color-8
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 <b>Sito web.</b> galleriaaccademiafirenze
          tr
            td Beniculturali 
            td Palacio construido para el banquero florentino Luca Pitti, aunque sus descendientes lo terminaron vendiendo a la dinastía más famosa, los <em>Médici.</em>
            td 
              .row.p-3
                .col-lg-auto
                  a.anexo.mb-4.mb-lg-0(href="https://www.beniculturalionline.it/location-5091_Palazzo-Pitti---Virtual-Tour-360%C2%B0.php " target="_blank")
                    .anexo__icono.bg-color-8
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 <b>Sito web.</b> beniculturalionline
    
    p.mb-4 Hablemos ahora sobre una de las familias con más influencia en el Renacimiento.
    
    h2.mb-5(data-aos="fade-left") La influyente familia <em>Médici</em>

    .bg-full-width.bg-color-7
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/13.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-10.px-4.py-5.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema4/14.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  p.mb-0 Una familia reconocida en el Renacimiento, con poder e influencia en la nobleza italiana, en Florencia y fueron grandes duques de la Toscana. En el siglo XV, hicieron una fortuna y sobrevivieron las crisis; conquistaron el papado por varios años, también tuvieron reinas en Francia y alianzas importantes para alcanzar el poder dentro de las instituciones. Patrocinaron a los grandes artistas locales y europeos de alto reconocimiento en el Renacimiento, como Leonardo Da Vinci, Donatello, Miguel Ángel. 
        .row.justify-content-center
          .col-lg-9
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/link.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Adivina la pintura | Quiz/Trivia/Test/Arte
                      p.mb-0 Para más información sobre la historia de esta influyente familia, lo invitamos a visitar el recurso 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.enflorencia.com/los-medici/" target="_blank")
                        span ir al sitio
                        i.fas.fa-arrow-right


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.galleriaaccademiafirenze.it/es/accademia-online/" target="_blank" rel="noopener noreferrer") ACADEMIA FLORENCIA. Online. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.beniculturalionline.it/location-5091_Palazzo-Pitti---Virtual-Tour-360%C2%B0.php " target="_blank" rel="noopener noreferrer") BENICULTURA ON LINE. Palazzo Pitti. Florencia.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.virtualuffizi.com/es/visita-virtual.html" target="_blank" rel="noopener noreferrer") GALERIA UFIZZI. Florencia, Italia. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.beniculturalionline.it/location-5091_Palazzo-Pitti---Virtual-Tour-360%C2%B0.php " target="_blank" rel="noopener noreferrer") BENICULTURA ON LINE. Palazzo Pitti. Florencia.

           

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
