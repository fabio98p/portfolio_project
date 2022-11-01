<template>
	<div id="image_carousel">
		<div v-for="media in medias" class="image">
            <div class="media_container" v-if="GetCardIdByElement(media) == this.actualMedia">
                <img :src="require(`@/assets/${this.$route.params.id}/${media.media.source}`)" v-if="media.type.source == 'image'"  @click="GetImageById(media)" />
                <YoutubePlayer :idVideo="media.media.source" v-if="media.type.source == 'player'" />
            </div>
		</div>
		<div class="medias_selector">
			<div class="media" v-for="media in medias" :class="AddMediaClass(media)">
				<img :src="require(`@/assets/${this.$route.params.id}/${media.thumbnail.source}`)" @click="SetactualMediaById(GetCardIdByElement(media))" />
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
			actualMedia: 0
		}
	},
	props: {
		medias: Array
	},
	components: { YoutubePlayer },
	methods: {
		Back() {
            if (this.actualMedia != 0) {
                this.actualMedia--
			} else {
                this.actualMedia = this.medias.length -1
			}
		},
		Front() {
            if (this.actualMedia != this.medias.length -1) {
                this.actualMedia++
			} else {
                this.actualMedia = 0
			}
		},
		GetCardIdByElement(e) {
			return this.medias.indexOf(e)
		},
		SetactualMediaById(id) {
			this.actualMedia = id
		},
		AddMediaClass(media) {
			return `${this.GetCardIdByElement(media) == this.actualMedia ? 'active' : ''} ${media.type.source == 'player' ? 'player' : 'image'}`
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/master.scss';

#image_carousel {
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
                cursor: pointer;
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
