# Uniform Luminosity Palette Generator

Some tests to get a SCSS function that, given a (hue, sat, lum) can generate a color, not based on the light of the hsl, but based on the perceived light.
For example, 2 color tones, yellow and blue (![#00f](https://placehold.co/15x15/ff0/ff0.png)![#ff0](https://placehold.co/15x15/00f/00f.png)), have the same light value (50%) but a drastic difference of emitted light. If we equalized both luminosities, the result would be this shades of yelllow and blue: ![#8a8a00](https://placehold.co/15x15/8a8a00/8a8a00.png)![#7575ff](https://placehold.co/15x15/7575ff/7575ff.png), because if we turn them into grayscale, the result would be: ![#808080](https://placehold.co/15x15/808080/808080.png)![#808080](https://placehold.co/15x15/808080/808080.png)
