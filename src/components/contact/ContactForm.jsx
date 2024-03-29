import React from "react";

function ContactForm() {
  return (
    <div id="form-main">
      <div id="form-div">
        <form
          action="https://formspree.io/f/xjvjqwdo"
          method="POST"
          class="form"
          id="form1"
        >
          <p class="name">
            <input
              name="name"
              type="text"
              class="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
              placeholder="Name"
              id="name"
            />
          </p>

          <p class="email">
            <input
              name="email"
              type="text"
              class="validate[required,custom[email]] feedback-input"
              id="email"
              placeholder="Email"
            />
          </p>

          <p class="text">
            <textarea
              name="text"
              class="validate[required,length[6,300]] feedback-input"
              id="comment"
              placeholder="Message"
            ></textarea>
          </p>

          <div class="submit">
            <input type="submit" value="Get in Touch" id="button" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
