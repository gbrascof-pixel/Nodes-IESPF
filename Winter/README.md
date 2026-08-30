# Implementació d'Esdeveniments Extra

A continuació es detallen els passos per afegir esdeveniments personalitzats (efecte de flocs de neu i regals) al web.

### 1. Accés als ginys d'administració
Accedim al Nodes amb el compte d'**admin** i ens dirigim a **Aparença** ➔ **Ginys**.

![Accés a Ginys](Unnamed.png)

### 2. Afegir el bloc de contingut
Afegim un element **HTML personalitzat** a un dels blocs del **Footer** (peu de pàgina).

![Afegir HTML personalitzat](Captura%20de%20pantalla%202025-12-01%20193635.png)
![Configuració del bloc footer](Captura%20de%20pantalla%202025-12-01%20193647.png)

### 3. Inserció del codi lògic (JavaScript)
Copiem el contingut de la funció `<script></script>` del fitxer `html-personalitzat (flocs de neu + regals).txt` i l'enganxem dins del quadre de text del giny HTML personalitzat que acabem de crear.

### 4. Aplicació dels estils (CSS)
Copiem l'estil CSS del fitxer `css-personalitza (flocs de neu + regals).txt` i el peguem a la secció **Personalitza** ➔ **CSS addicional** del tema de WordPress.
