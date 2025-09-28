# Uniform Luminosity Palette Generator

Some tests to get a SCSS function that, given a (hue, sat, lum) can generate a color, not based on the light of the hsl, but based on the perceived light.
For example, 2 color tones, blue <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:#00f;"></span> and yellow <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:#ff0;"></span>, have the same light value (50%) but a drastic difference of emitted light.
