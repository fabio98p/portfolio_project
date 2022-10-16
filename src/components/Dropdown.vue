<template>
    <section id="dropdown" v-click-outside="CloseDropdown">
        <h1 @click="ToggleDropdown" >{{datas.titledropdown.toString().split('\[')[1].split('\]')[0].slice(1, -1)}}</h1>
        <ul v-if="DropdownOpen">
            <li v-for="e in datas.bodydropdown">
                <router-link :to="{name: datas.mainlink.toString().split('\[')[1].split('\]')[0].slice(1, -1), params: {id :e.link.toString().split('\[')[1].split('\]')[0].slice(1, -1)}}" class="link">{{e.text.toString().split('\[')[1].split('\]')[0].slice(1, -1)}}</router-link>
            </li>
        </ul>
    </section>

</template>
<script>
export default {
	name: 'dropdown',
	data() {
		return {
			DropdownOpen: false
		}
	},
	props: {
		datas: Object
	},
	components: {},
    watch: {
        $route (to, from){
            this.CloseDropdown()
        }
    },
	methods: {
        ToggleDropdown(){
            if(this.DropdownOpen == false) this.DropdownOpen = true
            else this.DropdownOpen = false
        },
        CloseDropdown(){
            this.DropdownOpen = false
        }
    }
}
</script>
<style scoped lang="scss">
#dropdown{
    position: relative;
    ul{
        position: absolute;
        top: 73px;
        left: 50%;
        transform: translate(-50%, 0);

        background-color: white;
        border: 1px solid black;
        padding: 10px;
        border-radius: 20px;
        z-index: 30;
        li{
            list-style: none;
            text-decoration:none;
            padding: 10px;
            .link{
                text-decoration:none;
                color: black;
            }
        }
    }
}
</style>