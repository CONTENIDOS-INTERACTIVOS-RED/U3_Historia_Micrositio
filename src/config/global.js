export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Historia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Historia que relata historias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prehistoria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Recursos para explorar la prehistoria',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Edad Antigua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Edad Media',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'El renacimiento europeo',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Edad Moderna y Edad Contemporánea',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Edad Moderna',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Edad Contemporánea',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'SÁNCHEZ JARAMILLO, L. (2005).  La historia como ciencia. Revista Latinoamericana de Estudios Educativos (Colombia), vol. 1, núm. 1, julio-diciembre, 2005, pp. 54-82 Universidad de Caldas Manizales, Colombia',
      link: 'https://www.redalyc.org/pdf/1341/134116845005.pdf ',
    },
    {
      referencia:
        'HERRERA, J. La historia de nuestra prehistoria. Las investigaciones de Dolores Piperno Tareas, núm. 125, enero-abril, 2007, pp. 119-130 Centro de Estudios Latinoamericanos "Justo Arosemena" Panamá, Panamá',
      link: 'https://www.redalyc.org/pdf/5350/535055617009.pdf ',
    },
    {
      referencia:
        'TORREGROZA, E. HERRERA, M. (2021). Renacimiento e historia global Desafíos, vol. 33, núm. 1, 2021, -junio, pp. 1-8 Universidad del Rosario Bogotá, Colombia',
      link:
        'https://www.redalyc.org/journal/3596/359667152012/359667152012.pdf  ',
    },
    {
      referencia:
        'ANZOLA, I. (2005). El efecto Medici, percepciones rompedoras en la intersección de ideas, conceptos y culturas. Harvard Business School Press, Boston Massachusetts. Barcelona: deusto, 2005. ISBN 9788423423118 Cuadernos Latinoamericanos de Administración, vol. VI, núm. 11, julio-diciembre, 2010, pp. 111-113 Universidad El Bosque Bogotá, Colombia',
      link: 'https://www.redalyc.org/pdf/4096/409634364007.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agricultura',
      significado:
        'Conjunto de técnicas, conocimientos y saberes relacionados con el cultivo o labranza de la tierra, orientados principalmente a la producción de alimentos y materias primas de origen vegetal',
    },
    {
      termino: 'Colonialismo ',
      significado:
        'Sistema político, económico y social en el que un Estado extranjero (la metrópoli) domina y explota un territorio ajeno, conocido como colonia.',
    },
    {
      termino: 'Cultura Secular',
      significado:
        'Conjunto de expresiones, valores, conocimientos y formas de vida que se desarrollan al margen de la influencia religiosa, o bien, donde la religión deja de ser el eje central de la vida pública y socia',
    },
    {
      termino: 'Democracia',
      significado:
        'Forma de organización social y política en la que el poder reside en el pueblo, quien lo ejerce directamente o a través de representantes elegidos',
    },
    {
      termino: 'Edad Media',
      significado:
        'Período histórico de la civilización occidental que abarca aproximadamente desde el siglo V hasta el siglo XV. Se considera que comenzó en el año 476 con la caída del Imperio romano de Occidente y terminó en 1492 con el descubrimiento de América, aunque algunos historiadores sitúan su fin en 1453, año de la caída de Constantinopla y la invención de la imprenta',
    },
    {
      termino: 'Edad Moderna',
      significado:
        'Periodo histórico que se extiende aproximadamente desde mediados del siglo XV hasta finales del siglo XVIII, situándose entre la Edad Media y la Edad Contemporánea',
    },
    {
      termino: 'Expediciones',
      significado:
        'Viajes organizados en grupo con diversos objetivos, como exploraciones geográficas, científicas, militares o de aventura',
    },
    {
      termino: 'Historia Universal',
      significado:
        'Conjunto de hechos y procesos que han ocurrido en torno al ser humano desde su aparición hasta la actualidad. Se estudia a través de diversas disciplinas como la historiografía, arqueología, antropología, genética y lingüística',
    },
    {
      termino: 'Imperio',
      significado:
        'Entidad política que ejerce control sobre múltiples territorios y poblaciones, generalmente mediante conquista o dominio político, con un centro de poder (metrópoli) que subordina a las periferias',
    },
    {
      termino: 'Monarquía',
      significado:
        'Forma de gobierno en la que el poder político recae en una sola persona, llamada monarca, quien actúa como jefe de Estado de manera vitalicia o hasta su abdicación.',
    },
    {
      termino: 'Nómada',
      significado:
        'Individuos, tribus o pueblos que no tienen un lugar fijo de residencia y se trasladan de un lugar a otro, generalmente dedicados a actividades como la caza y el pastoreo',
    },
    {
      termino: 'Prehistoria',
      significado:
        'Período de la historia humana que abarca desde la aparición de los primeros homínidos, hace aproximadamente 2.5 millones de años, hasta la invención de la escritura, alrededor del 3300 a.C. en el Oriente Próximo',
    },
    {
      termino: 'Revoluciones',
      significado:
        'Cambios sociales fundamentales que afectan la estructura del poder o la organización de una sociedad, ocurriendo en un periodo que puede ser corto o largo. Se entiende como una transformación radical, a menudo violenta, que puede afectar ámbitos políticos, sociales, económicos o culturales',
    },
    {
      termino: 'Tradición oral',
      significado:
        'Conjunto de expresiones culturales que se transmiten verbalmente de generación en generación con el propósito de difundir conocimientos, valores, experiencias y la memoria colectiva de una comunidad. Incluye formas habladas como cuentos, mitos, leyendas, canciones, proverbios, adivinanzas, poemas épicos, plegarias y representaciones dramáticas, entre otras',
    },
  ],
}
