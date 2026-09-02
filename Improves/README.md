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

### 4. Guia i explicació del codi
#### A. Menú superior i capçalera flotant

```css
.ast-below-header-wrap { margin-bottom: 30px; }
```
Afegeix un espai de 30 píxels a la part inferior del menú per separat-lo visualment del carrusel d'imatges.

```css
body.home div.ast-below-header-bar...
```
Ajusta la posició de la barra del menú a la pàgina d'inici per mantenir-ne l'alineació correcta.

```css
.home .ast-primary-header-bar...
```
Arrodoneix les esquines de la barra principal (30px les superiors i 15px les inferiors).

```css
.ast-builder-layout-element... { margin-right: -15px; }
```
Ajusta la posició d'un element del menú per corregir-ne l'alineació dretana.

```css
div#ast-desktop-header { background-color: white; border-radius: 30px 30px 15px 15px; }
```
Defineix el fons blanc i les cantonades arrodonides de la capçalera en ordinadors.

```css
div#ast-desktop-header { width: calc(100% - 70px); margin-left: 35px; }
```
Redueix l'amplada de la capçalera i la centra, creant un efecte de targeta flotant.

```css
.slick-list.draggable
```
Arrodoneix les vores del carrusel per encaixar amb l'estil de la capçalera.

```css
Regles @media screen...
```
Mantenen els bordes arrodonits del menú quan es visualitza des de mòbils o tauletes.

#### B. Distribució d'articles en 3 columnes

```css
.ast-row { display: grid !important; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
```
Organitza les entrades del web en una quadrícula de 3 columnes iguals amb un espai de separació de 1rem.

```css
.ast-row > article { width: 100% !important; }
```
Força cada article a ocupar tot l'ample de la seva columna corresponent.

```css
div#primary:has(.ast-row) { width: 100% !important; }
```
Aprofita tot l'ample de la pàgina quan hi ha articles disposats en quadrícula.

```css
Regles @media screen... per a .ast-row
```
En pantalles petites (mòbils i tauletes), canvia la disposició a una sola columna apilada verticalment per facilitar-ne la lectura.

#### C. Neteja de la barra lateral (Sidebar)

```css
div#secondary:not(:has(.sidebar-main *)) { display: none !important; }
```
Detecta si la columna lateral està buida i, si no conté cap element, l'amaga completament per no deixar espais en blanc inútils.

#### D. Peu de pàgina (Footer)

```css
.site-above-footer-wrap... { background-color: #F2F2F2; }
```
Aplica un color gris clar unificat (#F2F2F2) a la franja superior del peu de pàgina.
