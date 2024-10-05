# Uniform Luminosity Palette Generator

Some tests to get a SCSS function that, given a (hue, sat, lum) can generate a color, not based on the light of the hsl, but based on the perceived light.
For example, 2 color tones, blue (#0000ff, hsl(240deg 100% 50%)) and yellow (#ffff00, hsl(60deg 100% 50%)), have the same light value (50%) but a drastic difference of emitted light.
