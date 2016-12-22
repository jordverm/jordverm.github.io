---
layout  : default
title   : "Dogpagnie"
---
<div class="grid__development">
<div class="grid__container">
   <div class="grid__row">
      <div class="grid__bp0-column-12"><div>
        <h1 class="titel">Registreer</h1>
        <h3 class="onderTitel" id="welcomeMessage"></h3>

    <!-- Login -->
<div class="grid__bp0-column-12 popup"><div>
    <div id="login" class="demo-card-square mdl-card mdl-shadow--2dp">
      <div class="mdl-card__supporting-text">
        <form id="frm-login register" method="get" action="" onsubmit="return store(this);">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="username" placeholder="Gebruikersnaam" required value="">
            <label class="mdl-textfield__label" for="txtUserName">Gebruikersnaam</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="password" id="password" placeholder="Select A Password" required value="" >
            <label class="mdl-textfield__label" for="txtPassWord">Paswoord</label>
          </div>
          <input type="submit" value="Register" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"/>
        </form>
        <p>Al een account? <a href="login.html">Log in</a></p>
      </div>
    </div>
    </div></div>

    </div></div>
</div>        
</div>
</div>


<!-- External JS-libraries: None at this moment -->
<script src="https://code.getmdl.io/1.2.1/material.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.min.js"></script>


<script src="js/registreer/testlogin.js"></script>




