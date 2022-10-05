<template>
	<div id="image_carousel">
		<div class="back" @click="Back">
			<font-awesome-icon icon="fa-solid fa-chevron-left" />
		</div>
		<div v-for="data in datas" class="image">
			<img :src="data.link.source" v-if="GetCardIdByElement(data) == this.actualImg" @click="GetImageById(data)" />
		</div>
		<div class="front" @click="Front">
			<font-awesome-icon icon="fa-solid fa-chevron-right" />
		</div>
        <div class="dots">
            <div class="dot" v-for="data in datas" :class="GetCardIdByElement(data) == actualImg ? 'active': ''" @click="SetActualImgById(GetCardIdByElement(data))" ></div>
        </div>
	</div>
</template>

<script>
export default {
	name: 'imageCarousel',
	data() {
		return {
			actualImg: 0
		}
	},
	props: {
		datas: Array
	},
	components: {},
	methods: {
        Back() {
            if (this.actualImg != 0) {
                this.actualImg--
			} else {
                this.actualImg = this.datas.length -1
			}
		},
		Front() {
            if (this.actualImg != this.datas.length -1) {
                this.actualImg++
			} else {
                this.actualImg = 0
			}
		},
        GetCardIdByElement(e) {
			return this.datas.indexOf(e)
		},
        SetActualImgById(id){
            this.actualImg = id
        }
	}
}
</script>
<style lang="scss" scoped>
@import '@/master.scss';

#image_carousel {
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
