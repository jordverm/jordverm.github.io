---
layout  : default
title   : "Dogpagnie"
---
<div class="grid__development">
<div class="grid__container">
   <div class="grid__row">
   		<div class="grid__bp0-column-12"><div>
       	<h1 class="titel">In compagnie met een hond</h1>
       	<h3 class="onderTitel">schrijf je in als compagnie en ga op stap met een hond</h3>
       	<span class="orange"><a href="#schrijfin">Ik wil compagnie zijn</a></span>
       	<img src="../assets/compagnieline.svg" width="100%" class="cityline">
		</div></div>

<div class="grid__bp0-column-12"><div>
       	<h1 class="titel">

wat is een compagnie

</h1>
       	<h3 class="onderTitel">
wat kan ik doen en wat mag ik doen als compagnie
		</h3>

<ul class="ulDog">
  <li class="dogLi">Honden begeleiden</li>
  <li class="dogLi">Beschikbare routes gebruiken
  <li class="dogLi">De hondenvoorzieningen gebruiken</li>
</ul>
<section class="mdl-layout__tab-panel is-active" id="fixed-tab-posts-list">
        <h1 class="titel">

Alle Compagnie

</h1>
        <h3 class="onderTitel">
Vind hier alle compagnie die ingeschreven zijn
    </h3>
          <div class="page-content">
            <div class="mdl-grid list-posts">
            </div>
          </div>
        </section>
        <h1 class="titel">

Inschrijven

</h1>
<form id="frm-post-create" class="mdl-grid mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone  mdl-shadow--2dp formCompagnie">
                  <fieldset><a name="schrijfin">
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col inputFielsDog">
                      <input class="mdl-textfield__input inputFields" type="text" name="txtTitle" id="txtTitle" placeholder="Jan Janssens" required>
                      <label class="mdl-textfield__label" for="txtTitle">Naam</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12- colinputFielsDog">
                      <input class="mdl-textfield__input inputFields" type="text" name="txtAdres"  id="txtAdres" placeholder="Stationstraat 17, Gent" required></input>
                      <label class="mdl-textfield__label" for="txtAdres">Adres</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col inputFielsDog">
                      <input class="mdl-textfield__input inputFields" type="number" name="txtAge"  id="txtAge" placeholder="76" required></input>
                      <label class="mdl-textfield__label" for="txtAge">Leeftijd*</label>
                      <figcaption>*Leeftijd tussen 18 en 100 jaar.</figcaption>
                    </div>
                    <button class="orange">Inschrijven</button>
                  </fieldset></a>
                </form>

</div>
</div>
</div>


<!-- Bottom scripts -->
  <script src="js/compagnie/utils.js"></script>
    <script src="js/compagnie/models.js"></script>
    <script src="js/compagnie/services.js"></script>
    <script src="js/compagnie/main.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="vendor/jquery/jquery.min.js">\x3C/script>')</script> 



