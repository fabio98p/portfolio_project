<template>
	<div id="expirience_card">
		<h4 class="role">{{ expirience.role.toString().split('\[')[1].split('\]')[0].slice(1, -1) }}</h4>
		<div class="workinfo">
			<div class="company">{{ expirience.company.toString().split('\[')[1].split('\]')[0].slice(1, -1) }}</div>
			<div>&nbsp;-&nbsp;</div>
			<div class="typeofcontract">{{ expirience.typeofcontract.toString().split('\[')[1].split('\]')[0].slice(1, -1) }}</div>
		</div>
		<div class="time">
			<div class="statdate">{{ expirience.statdate.toString().split('\[')[1].split('\]')[0].slice(1, -1) }}</div>
			<div>&nbsp;&nbsp;-&nbsp;</div>
			<div class="enddate">{{ expirience.enddate.toString().split('\[')[1].split('\]')[0].slice(1, -1) }}</div>
			<div>&nbsp;&nbsp;&nbsp;</div>
			<div class="duration">{{ expirience.duration.toString().split('\[')[1].split('\]')[0].slice(1, -1) }}</div>
		</div>
        <div class="location">{{ expirience.location.toString().split('\[')[1].split('\]')[0].slice(1, -1) }}</div>
		<div class="description">{{ expirience.description.toString().split('\[')[1].split('\]')[0].slice(1, -1) }}</div>
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
#expirience_card {
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
