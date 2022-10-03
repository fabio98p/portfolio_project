<template>
	<div id="imageCarousel">
		<div v-for="media in medias" class="image">
            <div class="media_container" v-if="media.id == this.actualImg">
                <img :src="media.link.source" v-if="media.type.source == 'image'"  @click="GetImageById(media)" />
                <YoutubePlayer :idVideo="media.link.source" v-if="media.type.source == 'player'" />
            </div>
		</div>
		<div class="medias_selector">
			<div class="media" v-for="media in medias" :class="AddMediaClass(media)">
				<img :src="media.thumbnail.source" @click="SetActualImgById(media.id)" />
				<div class="player_icon">
					<font-awesome-icon icon="fa-solid fa-play" class="play" />
				</div>
			</div>
		</div>
		<div class="scollbar_container">
			<div class="back" @click="Back">
				<font-awesome-icon icon="fa-solid fa-chevron-left" />
			</div>
			<div class="scrollbar">
                <div class="scrollbar_bar"></div>
            </div>
			<div class="front" @click="Front">
				<font-awesome-icon icon="fa-solid fa-chevron-right" />
			</div>
		</div>
	</div>
</template>

<script>
import YoutubePlayer from '../YoutubePlayer.vue'
export default {
	name: 'imageCarousel',
	data() {
		return {
			actualImg: 1
		}
	},
	props: {
		medias: Array
	},
	components: { YoutubePlayer },
	methods: {
		Back() {
			if (this.actualImg != 1) {
				this.actualImg--
			} else {
				this.actualImg = this.medias.length
			}
		},
		Front() {
			if (this.actualImg != this.medias.length) {
				this.actualImg++
			} else {
				this.actualImg = 1
			}
		},
		GetImageById(data) {
			console.log(data)
		},
		SetActualImgById(id) {
			this.actualImg = id
		},
		AddMediaClass(media) {
			return `${media.id == this.actualImg ? 'active' : ''} ${media.type.source == 'player' ? 'player' : 'image'}`
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/master.scss';

#imageCarousel {
	position: relative;
	overflow: hidden;
	background-color: cadetblue;

	.image {
		width: 100%;
		overflow: hidden;
		img {
			width: 100%;
			overflow: hidden;
		}
	}
	.dots {
		position: absolute;
		left: 50%;
		bottom: 30px;
		transform: translate(-50%, 0);

		display: flex;

		.dot {
			height: 15px;
			width: 15px;
			background-color: white;
			border: 2px solid black;
			border-radius: 50%;
			margin: 0 2px;
		}
		.dot.active {
			background-color: #198754;
		}
	}
	.medias_selector {
		display: flex;
		align-items: center;
		overflow-x: auto;
		position: relative;

		.media {
			min-width: 110px;
			width: 110px;
			margin: 0 2px;
			font-size: 0;
			position: relative;

			img {
				width: 100%;
			}
			.player_icon {
				display: none;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background-color: #0000007c;
				padding: 5px;
				.play {
					color: white;
					font-size: 16px;
				}
			}
		}
		.media.active {
			border: 2px solid white;
		}
		.media.player {
			.player_icon {
				display: block;
			}
		}
	}
	.scollbar_container {
        margin: 5px 0;
		display: flex;
        align-items: center;
		.back {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 20px;
            padding: 0 10px;
			background-color: rgba($color: $black, $alpha: 0.5);
			border-radius: 10px;
			font-size: 14px;
			color: $white;
            margin-right: 3px;
		}
		.scrollbar {
			height: 20px;
            border-radius: 10px;
			background-color: #198754;
			flex-grow: 2;
            padding: 3px;
            .scrollbar_bar{

                height: 14px;
                width: 35px;
                border-radius: 7px;
                background-color: burlywood;
            }
		}
		.front {
            display: flex;
            justify-content: center;
            align-items: center;

            padding: 3px 10px;
			background-color: rgba($color: $black, $alpha: 0.5);
			border-radius: 10px;
			font-size: 16px;
			color: $white;
            margin-left: 3px;
		}
	}
}
</style>
