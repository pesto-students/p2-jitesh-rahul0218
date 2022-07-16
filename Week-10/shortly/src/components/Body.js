import React from 'react';

function Body(){
    return <div>
        <section class="landing">
            <div class="landing-text">
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights on how your
                    links are performing.
                </p>
            
            </div>
            <div class="landing-image">
            <img src="../img/illustration-working.svg" alt="Working Illustration" />
            </div>
        </section>
 
  <section class="features" id="features"/>
    <div class="container">
      
      <div class="url-shorten-feature">
        <form class="url-shorten-form" id="url-shorten-form">
          <div>
            <input type="text" class="url-input" placeholder="Shorten a link here..." autocomplete="off" />
            <span class="alert"></span>
          </div>
          <button type="submit" class="btn btn-lg btn-plus-icon">Shorten It!</button>
        </form>
        <div class="url-shorten-results">
            
        </div>
      </div>

    </div>
    </div>
}
export default Body;
