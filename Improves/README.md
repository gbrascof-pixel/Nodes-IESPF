# Personalització de l'Estil via CSS

A continuació es detallen els passos per afegir codi CSS addicional utilitzant l'eina de personalització visual de WordPress.

> 💡 **Nota:** Les captures de pantalla d'aquesta secció s'han realitzat utilitzant la demo de Nodes, ja que actualment no es disposa de permisos d'administració directes al web de l'IES.

### 1. Accés al menú de personalització
Quan estiguis navegant per la pàgina web amb la teva sessió iniciada, fes clic al botó **Personalitza** que apareix a la barra superior d'eines.

![Del menú d'admin, anar a personalitza](Captura%20de%20pantalla%202025-06-19%20143849.png)

### 2. Navegació a la secció CSS addicional
Dins del menú lateral esquerre de personalització, cerca i selecciona l'opció **CSS addicionals**.

![Del menú de personalització, anar a css adicional](Captura%20de%20pantalla%202025-06-19%20143910.png)

### 3. Inserció i publicació del codi
Al requadre de text que s'ha obert, enganxa el següent bloc de codi per ajustar els marges de les columnes:

```css
.small-12.large-4.text-center.columns {
    margin: 30px !important;
}
```
(ÉS un exemple)

Un cop inserit el codi correctament, fes clic al botó **Publica** situat a la part superior del menú lateral per desar els canvis.

![Posar el css i clickar publicar](Captura%20de%20pantalla%202025-06-19%20143928.png)
