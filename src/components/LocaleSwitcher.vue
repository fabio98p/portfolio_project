<template>
    <div id="locale_switcher">
      <select v-model="$i18n.locale">
        <option :value="locale.code" v-for="locale in locales" :key="locale.code">
          {{locale.name}}
        </option>
      </select>
    </div>
  </template>
  <script>
  import { getSupportedLocales } from "@/util/i18n/supported-locales"
  export default {
	name: 'localSwitcher',
    data: () => ({ locales: getSupportedLocales() })
  }
  </script>