---
layout  : default
title   : "Dogpagnie"
---
<div class="grid__development">
<div class="grid__container">
   <div class="grid__row">
      <div class="grid__bp0-column-12"><div>
        <h1 class="titel">Contact</h1>
        <h3 class="onderTitel">Contacteer ons met al je vragen</h3>
    </div></div>
 <section class="mdl-layout__tab-panel" id="fixed-tab-posts-create">
          <div class="page-content">
            <div class="mdl-grid frm-post-create-container">
              <div class="mdl-cell mdl-cell--12-col">
                <form id="frm-post-create" class="mdl-grid mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone  mdl-shadow--2dp formCompagnie">
                  <fieldset>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
                      <input class="mdl-textfield__input" type="text" name="txtNaam" id="txtNaam">
                      <label class="mdl-textfield__label" for="txtNaam">Naam</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
                      <input class="mdl-textfield__input" type="email" rows= "3" name="txtEmail"  id="txtEmail"></input>
                      <label class="mdl-textfield__label" for="txtEmail">Email</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
                      <textarea class="mdl-textfield__input" type="text" rows= "5" name="txtVraag"  id="txtVraag"></textarea>
                      <label class="mdl-textfield__label" for="txtVraag">Vraag</label>
                    </div>
                    <button class="orange">Verzenden</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </section>

</div>
</div>
</div>
<script src="js/contact/utils.js"></script>
<script src="js/contact/models.js"></script>
<script src="js/contact/services.js"></script>
<script src="js/contact/main.js"></script>