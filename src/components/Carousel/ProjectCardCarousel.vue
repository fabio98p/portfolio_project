<template>
	<div id="projectCardCarousel">
		<div class="back" @click="Back">
			<font-awesome-icon icon="fa-solid fa-chevron-left" />
		</div>
		<div v-for="project in projects" class="image">
			<ProjectCardForCarousel :project="project" v-if="GetCardIdByElement(project) == this.actualCard" />
		</div>
		<div class="front" @click="Front">
			<font-awesome-icon icon="fa-solid fa-chevron-right" />
		</div>
        <div class="dots">
            <div class="dot" v-for="project in projects"
                :class="GetCardIdByElement(project) == actualCard ? 'active': ''"
                @click="SetActualCardById(GetCardIdByElement(project))"
            ></div>
        </div>
	</div>
</template>

<script>
import ProjectCardForCarousel from '../Cards/ProjectCardForCarousel.vue'
export default {
	name: 'projectCardCarousel',
	data() {
		return {
			actualCard: 0
		}
	},
	props: {
		projects: Object
	},
	components: {  ProjectCardForCarousel },
	methods: {
		Back() {
            if (this.actualCard != 0) {
                this.actualCard--
			} else {
                this.actualCard = this.projects.length -1
			}
		},
		Front() {
            if (this.actualCard != this.projects.length -1) {
                this.actualCard++
			} else {
                this.actualCard = 0
			}
		},
		GetCardIdByElement(e) {
			return this.projects.indexOf(e)
		},
        SetActualCardById(id){
            this.actualCard = id
        }
	}
}
</script>
<style lang="scss" scoped>
@import '@/master.scss';

#projectCardCarousel {
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    .image{
        width: 100%;
        overflow: hidden;
        img{
            width: 100%;
            overflow: hidden;
        }
    }
	.back {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);

		background-color: rgba($color: $black, $alpha: 0.5);
        border-radius: 0 10px 10px 0;
		font-size: 60px;
		color: $white;
	}
	.front {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);

		background-color: rgba($color: $black, $alpha: 0.5);
        border-radius: 10px 0 0 10px;
		font-size: 60px;
		color: $white;
	}
    .dots{
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translate(-50%, 0);

        display: flex;

        .dot{
            height: 15px;
            width: 15px;
            background-color: white;
            border: 2px solid black;
            border-radius: 50%;
            margin: 0 2px;
        }
        .dot.active{
            background-color: #198754;
        }
    }
}
</style>
