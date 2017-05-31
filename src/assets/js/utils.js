import { Texture, TextureLoader, RGBFormat, RGBAFormat } from 'three'
import { IMAGE_URLS } from '@/assets/js/constants'

let loader = new TextureLoader()

export function getCanvasImage (image, width, height) {
  let canvas = document.createElement('canvas')
  let context = null
  canvas.width = width || image.naturalWidth
  canvas.height = height || image.naturalHeight
  context = canvas.getContext('2d')
  context.drawImage(image, 0, 0)
}

export function getTexture (imageName) {
  let image = (window.loader && window.loader.resources[imageName])
    ? window.loader.resources[imageName].data
    : null
  let imageURL = IMAGE_URLS[imageName]

  if (image && false) {
    let isJPEG = imageURL.endsWith('.jpg') || imageURL.endsWith('.jpeg')
    let texture = new Texture()
    texture.image = image
    texture.format = isJPEG ? RGBFormat : RGBAFormat
    return texture
  } else {
    return loader.load(imageURL)
  }
}
