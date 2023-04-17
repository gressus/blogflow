<script>
  export let data

  const translations = {
    en: {
      title: "Contact me",
      description:
        "If you have any questions or suggestions, please don't hesitate to get in touch:",
      nameLabel: "Name:",
      emailLabel: "Email:",
      messageLabel: "Message:",
      submitButton: "Submit",
      email: "me [at] site [dot] com",
    },
    kg: {
      title: "Мени менен байланыш",
      description:
        "Суроолоруңуз же сунуштарыңыз болсо, мени менен байланышыңыз:",
      nameLabel: "Аты:",
      emailLabel: "Email:",
      messageLabel: "Кабар:",
      submitButton: "Жөнөтүү",
      email: "me [ит] site [чекит] kg",
    },
  };

  const t = translations[data.lang]; 

</script>

<div class="contact-container">
  <h2>{t.title}</h2>
  <p>{t.description}</p>
  <p><span class="mail">Email:</span> <span class="email">{t.email}</span></p>
  <p><span class="mail">Telegram:</span> <span class="email">@[my nick]</span></p>
</div>

<style>
  .contact-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  p {
    font-size: 16px;
    margin-bottom: 1rem;
  }

  :global(html[data-theme='dark'] input),
  :global(html[data-theme='dark'] textarea) {
    background-color: #2c2c2e;
    border: 1px solid #3a3a3c;
    color: #ffffff;
  }

  :global(html[data-theme='light'] input),
  :global(html[data-theme='light'] textarea) {
    background-color: #ffffff;
    border: 1px solid #1c1c1e;
    color: #1c1c1e;
  }  

  .mail {
    color: grey;
  }
</style>