export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max)
}

export function lerp(a, b, t) {
    return a * (1.0 - t) + b * t
}

export function map (value, oldMin, oldMax, newMin, newMax) {
    return (value - oldMin) / (oldMax - oldMin) * (newMax - newMin) + newMin;
}

export function quadLerp(a, b, c, d, t, thresholdFirst, thresholdSecond) {
    if (t < thresholdFirst) {
        const percentage = map(t, 0.0, thresholdFirst, 0.0, 1.0)
        return lerp(a, b, percentage)
    }
    else if (t < thresholdSecond) {
        const value = t - thresholdFirst;
        const max = thresholdSecond - thresholdFirst;
        const percentage = map(value, 0.0, max, 0.0, 1.0)
        return lerp(b, c, percentage)
    }
    else {
        const value = t - thresholdSecond;
        const max = 1.0 - thresholdSecond;
        const percentage = map(value, 0.0, max, 0.0, 1.0)
        return lerp(c, d, percentage)
    }
}