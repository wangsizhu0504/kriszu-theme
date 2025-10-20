import type { Format } from '../utils';

// 暗色色板
import Color from 'color';
import { getColorString } from '../utils';
import { colorPalette } from './palette';

// 动态梯度算法
export function colorPaletteDark(originColor: string, i: number, format: Format) {
  const lightColor = Color(colorPalette(originColor, 10 - i + 1));
  const originBaseColor = Color(originColor);

  const originBaseHue = originBaseColor.hue();
  const originBaseSaturation = originBaseColor.saturationv();
  const baseColor = Color({
    h: originBaseColor.hue(),
    s: getNewSaturation(6),
    v: originBaseColor.value(),
  }) as any;

  const baseSaturation = baseColor.saturationv();
  const step = Math.ceil((baseSaturation - 9) / 4);
  const step1to5 = Math.ceil((100 - baseSaturation) / 5);

  function getNewSaturation(_index: number) {
    if (_index < 6)
      return baseSaturation + (6 - _index) * step1to5;

    if (_index === 6) {
      if (originBaseHue >= 0 && originBaseHue < 50)
        return originBaseSaturation - 15;

      if (originBaseHue >= 50 && originBaseHue < 191)
        return originBaseSaturation - 20;

      if (originBaseHue >= 191 && originBaseHue <= 360)
        return originBaseSaturation - 15;
    }

    return baseSaturation - step * (_index - 6);
  }

  const retColor = Color({
    h: lightColor.hue(),
    s: getNewSaturation(i),
    v: lightColor.value(),
  });

  return getColorString(retColor, format);
}
