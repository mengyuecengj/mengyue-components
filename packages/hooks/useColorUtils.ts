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
    const rgb = parseHexOrRgb(color);
    if (rgb) return `rgba(${rgb.join(',')},${alpha})`;
    if (_canvasCtx) {
      _canvasCtx.fillStyle = color;
      const resolved = _canvasCtx.fillStyle;
      const fromCanvas = parseHexOrRgb(resolved);
      if (fromCanvas) return `rgba(${fromCanvas.join(',')},${alpha})`;
    }
    return color;
  }

  return { parseHexOrRgb, toRGBA };
}
