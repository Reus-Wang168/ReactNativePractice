/**
 * Created by mac on 2017/12/6.
 */

import { Dimensions, PixelRatio } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const fontScale = PixelRatio.getFontScale();
const pixelRatio = PixelRatio.get();
const defaultPixel = 2;
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(height / h2, width / w2);

function px2dp(uiElementPx) {
    return scale * uiElementPx;
}
function fontScaleSize(size: number) {
    return size * fontScale;
}

export default {
    width,
    height,
    pixelRatio,
    px2dp,
    fontScaleSize
};
