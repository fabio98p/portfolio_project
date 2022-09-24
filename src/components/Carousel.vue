<template>
	<div class="carousel">
		<div class="back" @click="Back">
			<font-awesome-icon icon="fa-solid fa-chevron-left" />
		</div>
		<div v-for="data in datas" class="image">
			<img :src="data.link.source" v-if="data.id == this.actualImg" @click="GetImageById(data)" />
		</div>
		<div class="front" @click="Front">
			<font-awesome-icon icon="fa-solid fa-chevron-right" />
		</div>
        <div class="dots">
            <div class="dot" v-for="data in datas" :class="data.id == actualImg ? 'active': ''" @click="SetActualImgById(data.id)" >

            </div>
        </div>
	</div>
</template>

<script>
export default {
	name: 'carousel',
	data() {
		return {
			actualImg: 1
		}
	},
	props: {
		datas: Array
	},
	components: {},
	methods: {
		Back() {
			if (this.actualImg != 1) {
				this.actualImg--
			} else {
				this.actualImg = this.datas.length
			}
		},
		Front() {
			if (this.actualImg != this.datas.length) {
				this.actualImg++
			} else {
				this.actualImg = 1
			}
		},
		GetImageById(data) {
			console.log(data)
		},
        SetActualImgById(id){
            this.actualImg = id
        }
	}
}
</script>
<style lang="scss" scoped>
@import '../master.scss';

.carousel {
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
