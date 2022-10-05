<template>
	<div id="about">
        <div class="introduction">
            <h1>{{ $t('aboutmeview.title') }}</h1>
            <h3>{{ $t('aboutmeview.jobwork') }}</h3>
            <div class="">{{ $t('aboutmeview.description') }}</div>
        </div>

		<div class="workexpirience">
            <h2>{{ $t('aboutmeview.workexpirience.name') }}</h2>
            <ul class="expiriences">
                <li v-for="expirience in $tm('aboutmeview.workexpirience.experienceslist')" class="expirience">
                    <ExpirienceCard :expirience="expirience"></ExpirienceCard>
                </li>
            </ul>
        </div>

        <div class="trainings">
            <h2>{{ $t('aboutmeview.trainings.name') }}</h2>
            <ul class="expiriences">
                <li v-for="expirience in $tm('aboutmeview.trainings.experienceslist')" class="expirience">
                    <ExpirienceCard :expirience="expirience"></ExpirienceCard>
                </li>
            </ul>
        </div>
	</div>
</template>
<script>
import ExpirienceCard from '@/components/Cards/ExpirienceCard.vue';
export default {
	name: 'about',
	components: { ExpirienceCard },
	data() {
		return {
			dataTest: 'Hello World'
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
#about {
    .introduction{
        background-color: white;
        border-radius: 15px;
        border: 1px solid gray;
        padding: 10px;
        margin: 10px 0;
    }
    .workexpirience{
        background-color: white;
        border-radius: 15px;
        border: 1px solid gray;
        padding: 10px;
        margin-bottom: 10px;
        h2{
            padding: 15px 0;
            margin: 0;
            border-bottom: 1px solid lightgray;
        }
        .expiriences{
            display: flex;
            flex-direction: column;
        }
    }
    .trainings{
        background-color: white;
        border-radius: 15px;
        border: 1px solid gray;
        padding: 10px;
        margin-bottom: 10px;
    }
}
</style>
