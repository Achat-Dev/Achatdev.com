import { clamp, quadLerp } from "./math"

export class Scrollable {
    #scrollPercentage

    #thresholdIn
    #thresholdOut

    #scaleValues
    #opacityValues
    #blurValues

    constructor(thresholdIn, thresholdOut, scaleValues, opacityValues, blurValues) {
        this.#thresholdIn = thresholdIn
        this.#thresholdOut = thresholdOut
        this.#scaleValues = scaleValues
        this.#opacityValues = opacityValues;
        this.#blurValues = blurValues;
    }

    update(scrollY, threshold, windowHeight) {
        this.#scrollPercentage = clamp((scrollY - threshold) / windowHeight, 0.0, 1.0)
    }
    
    getScale() {

        return quadLerp(this.#scaleValues.a, this.#scaleValues.b, this.#scaleValues.c, this.#scaleValues.d, this.#scrollPercentage, this.#thresholdIn, this.#thresholdOut)
    }

    getOpacity() {
        return quadLerp(this.#opacityValues.a, this.#opacityValues.b, this.#opacityValues.c, this.#opacityValues.d, this.#scrollPercentage, this.#thresholdIn, this.#thresholdOut)
    }

    getBlur() {
        return quadLerp(this.#blurValues.a, this.#blurValues.b, this.#blurValues.c, this.#blurValues.d, this.#scrollPercentage, this.#thresholdIn, this.#thresholdOut)
    }

    getZIndex() {
        if (this.#scrollPercentage <= 0.0 || this.#scrollPercentage >= 1.0) {
            return 'auto'
        }

        return 100
    }
}