<template>
    <section id="footer">
        <p  v-html="$t('footer')" />
        <font-awesome-icon icon="fa-brands fa-linkedin" />
        <font-awesome-icon icon="fa-brands fa-github" />
    </section>
  </template>

  <style scoped lang="scss">
  #footer {
    text-align: center;
    padding-bottom: 1rem;
    background-color: var(--bg-footer);
    p{
        padding: 15.5px 0;
        margin: 0;
    }
  }
  </style>