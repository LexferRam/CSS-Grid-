## CSS Grid

simbolos unicode de ajedrez

1.  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)) ; 
  grid-auto-rows: minmax(100px, auto);/*como valor minimo tendra un height de 100px y cy si uno de los items necesita mas height entonces el item ajustara su height/

2. TEMPLATES

 .wrapper4{
    display:grid;
    grid-template-areas: 
      'header header header'
      'content content content'
      'aside aside aside'
      'footer footer footer'
    ;
  }

  #### para cada item se le define el area correspondiente:
  .item1{
    grid-area: header;
  }


### funcion repeat()

repeat([cant. de filas/columnas],[alto/ancho de cada item])


### centrar un formulario sobre una imagen usando Grid CSS revisar App2.js