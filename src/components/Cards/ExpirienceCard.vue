<template>
	<div id="expirienceCard">
		<h4 class="role">{{ expirience.role.source }}</h4>
		<div class="workinfo">
			<div class="company">{{ expirience.company.source }}</div>
			<div>&nbsp;-&nbsp;</div>
			<div class="typeofcontract">{{ expirience.typeofcontract.source }}</div>
		</div>
		<div class="time">
			<div class="statdate">{{ expirience.statdate.source }}</div>
			<div>&nbsp;&nbsp;-&nbsp;</div>
			<div class="enddate">{{ expirience.enddate.source }}</div>
			<div>&nbsp;&nbsp;&nbsp;</div>
			<div class="duration">{{ expirience.duration.source }}</div>
		</div>
        <div class="location">{{ expirience.location.source }}</div>
		<div class="description">{{ expirience.description.source }}</div>
	</div>
</template>
<script>
export default {
	name: 'expirienceCard',
	components: {},
	data() {
		return {
			dataTest: 'Hello World'
		}
	},
	props: {
		expirience: Object
	},
	methods: {
		MethodTest() {
			console.log('Hello World')
		}
	}
}
</script>
<style scoped lang="scss">
#expirienceCard {
	margin-bottom: 5px;
	border-bottom: 1px solid lightgray;
    padding: 10px;
    color: black;
	.role {
        margin: 5px 0;
	}
	.workinfo {
		display: flex;
        font-size: 17px;
	}
    .time{
        display: flex;
        font-size: 15px;
        color: grey;
    }
    .location{
        color: grey;
    }
    .description{
        margin-top: 15px;
    }
}
</style>
