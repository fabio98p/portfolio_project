<template>
	<div id="template">{{ dataTest }}</div>
	<p>{{ t('hello1') }}</p>
	<p>{{ t('pronto') }}</p>
	<p>{{ $t('utilities.seemore') }}</p>
</template>
<script>
import { useI18n } from 'vue-i18n'
export default {
	name: 'project',
	components: {},
	setup() {
		const { t } = useI18n({
			inheritLocale: true,
			useScope: 'local'
		})
		return { t }
	},
	data() {
		return {
			dataTest: 'Hello World from data'
		}
	},
	methods: {
		MethodTest() {
			console.log('Hello World')
		}
	}
}
</script>
<style scoped lang="scss">
#template {
	background-color: lightgray;
}
</style>
<i18n>
    {
      "en": {
        "hello1": "Hello world from translation",
        "pronto": "how is?"
      },
      "it": {
        "hello1": "ciao mondo da traduzioni",
        "pronto": "chi e?"
      }
    }
</i18n>
