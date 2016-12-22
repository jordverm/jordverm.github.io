---
layout  : default
title   : "Dogpagnie"
---

<div class="grid__development">
<div class="grid__container">
   <div class="grid__row">
   		<div class="grid__bp0-column-12"><div>
       	<h1 class="titel">Ik zoek een compagnie voor mijn hond</h1>
       	<h3 class="onderTitel">schrijf je hond in voor een compagnie</h3>
       	<span class="orange"><a href="#schrijfin">Schrijf mijn hond in</a></span>
       	<img src="../assets/dogline.svg" width="100%" class="cityline">
		</div></div>

<div class="grid__bp0-column-12"><div>
       	<h1 class="titel">

Wat doen ze met mijn hond 

</h1>
       	<h3 class="onderTitel">
Wat zullen ze doen met mijn hond
		</h3>

<ul class="ulDog">
  <li class="dogLi">Gaan wandelen met je hond</li>
  <li class="dogLi">Gebruik maken van aangeleverde routes</li>
  <li class="dogLi">De hondenvoorzieningen gebruiken</li>
</ul>

<section class="mdl-layout__tab-panel is-active" id="fixed-tab-posts-list">
        <h1 class="titel">

Alle Dogs

</h1>
        <h3 class="onderTitel">
Vind hier alle dogs die ingeschreven zijn
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
                      <input class="mdl-textfield__input inputFields" type="text" name="txtTitle" id="txtTitle" placeholder="Kito" required>
                      <label class="mdl-textfield__label" for="txtTitle">Dog naam</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col inputFielsDog">
                      <input class="mdl-textfield__input inputFields" type="text" rows= "3" name="txtBoss"  id="txtBoss" placeholder="Jan Janssens" required></input>
                      <label class="mdl-textfield__label" for="txtBoss">Naam baasje</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col inputFielsDog">
                      <input class="mdl-textfield__input inputFields" type="date" name="txtDatum"  id="txtDatum" placeholder="Enkel op woensdag" required></input>
                      <label class="mdl-textfield__label" for="txtStory">Oppas datum</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col inputFielsDog">
                      <input class="mdl-textfield__input inputFields" type="time" name="txtUur"  id="txtUur" placeholder="Enkel op woensdag" required></input>
                      <label class="mdl-textfield__label" for="txtStory">Start Oppas uur</label>
                    </div> 
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col inputFielsDog">
                      <input class="mdl-textfield__input inputFields" type="time" name="txtUurEnd"  id="txtUurEnd" placeholder="Enkel op woensdag" required></input>
                      <label class="mdl-textfield__label" for="txtUurEnd">Einde Oppas uur</label>
                    </div>
                     <button><span class="orange">Inschrijven</span></button>
                  </fieldset></a>
                </form>



   </div>
</div>
</div>


<!-- Bottom scripts
<script src="js/add.js"></script>-->
  <script src="js/posts/utils.js"></script>
    <script src="js/posts/models.js"></script>
    <script src="js/posts/services.js"></script>
    <script src="js/posts/main.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="vendor/jquery/jquery.min.js">\x3C/script>')</script> 


