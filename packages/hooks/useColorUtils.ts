/**
 * @description This is a about color set file
 * It's more like a collection file of tool function color than a hooks
 * This is also a necessary file in some color hooks files
 * We will evaluate whether it will be stored as hooks files in this directory in the future
 */
const _canvasCtx = (() => {
  const ctx = document.createElement('canvas').getContext('2d');
  return ctx || undefined;
})();

export function useColorUtils() {
  function parseHexOrRgb(input: string): [number, number, number] | null {
    if (input.startsWith('#')) {
      const hex = input.slice(1).length === 3 ? input.slice(1).replace(/./g, '$&$&') : input.slice(1);
      if (hex.length === 6 && /^[0-9a-fA-F]{6}$/.test(hex)) {
        const n = parseInt(hex, 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
      }
      return null;
    }
    const m = input.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    return m ? [+m[1], +m[2], +m[3]] : null;
  }

  function toRGBA(color: string, alpha = 0.2): string {
    if (!color) return '';

    // 如果是 CSS 变量（如 var(--color)），尝试解析实际值
    if (color.startsWith('var(')) {
      const dummyElement = document.createElement('div');
      dummyElement.style.color = color;
      document.body.appendChild(dummyElement);
      const resolvedColor = getComputedStyle(dummyElement).color;
      document.body.removeChild(dummyElement);

      // 解析计算后的颜色（可能是 rgb(...)）
      const rgb = parseHexOrRgb(resolvedColor);
      if (rgb) return `rgba(${rgb.join(',')},${alpha})`;
    }

    // 原始逻辑（处理 #RRGGBB 或 rgb(...)）
    const rgb = parseHexOrRgb(color);
    if (rgb) return `rgba(${rgb.join(',')},${alpha})`;

    // Canvas 回退逻辑
    if (_canvasCtx) {
      _canvasCtx.fillStyle = color;
      const resolved = _canvasCtx.fillStyle;
      const fromCanvas = parseHexOrRgb(resolved);
      if (fromCanvas) return `rgba(${fromCanvas.join(',')},${alpha})`;
    }

    return color; // 无法解析时返回原值
  }

  return { parseHexOrRgb, toRGBA };
}
