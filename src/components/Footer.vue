<template>
    <section id="footer">
        <p  v-html="$t('footer')" />
        <font-awesome-icon icon="fa-brands fa-linkedin" />
        <font-awesome-icon icon="fa-brands fa-github" />
    </section>
  </template>

  <style scoped>
  #footer {
    text-align: center;
    padding-bottom: 1rem;
    background-color: var(--background-color-primary);
  }
  </style>